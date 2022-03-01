import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List'
import { Loading } from '../components/Loading';
import Error from '../components/Error';
import { DriverStanding, StandingsEntry } from '../models/Models'
import { fetchDriverStandings } from '../services/F1Service';

function Drivers() {
  const [drivers, setDrivers] = useState<StandingsEntry | null>();

  useEffect(() => {
    fetchDriverStandings()
      .then(data => setDrivers(data.StandingsLists[0]))
      .catch(_ => setDrivers(null));
  }, []);

  const renderer = (standing: DriverStanding) => <div className="list-item">
    <div>
      <Link to={`/drivers/${standing.Driver.driverId}`} className="list-item-no">#{standing.position}</Link>
    </div>
    <div className="expand">
      <div><Link to={`/drivers/${standing.Driver.driverId}`}>{standing.Driver.givenName} {standing.Driver.familyName} ({standing.points})</Link></div>
      <div>Nationality: {standing.Driver.nationality}</div>
    </div>
  </div>

  return <>
    <h1>Drivers ({drivers?.season ?? new Date().getFullYear()})</h1>
    {drivers === undefined && <Loading />}
    {drivers === null && <Error message="Error loading drivers" />}
    {drivers && <List data={drivers.DriverStandings} renderer={renderer} keyExtractor={standing => standing.Driver.driverId} two={true} />}
  </>
}

export default Drivers