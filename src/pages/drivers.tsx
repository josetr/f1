import { useState, useEffect } from 'react';
import Link from 'next/link';
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
      <Link href={`/drivers/${standing.Driver.driverId}`} passHref={true}>
        <a className="list-item-no">{`#${standing.position}`}</a>
      </Link>
    </div>
    <div className="expand">
      <div><Link href={`/drivers/${standing.Driver.driverId}`} passHref={true}><a>{`${standing.Driver.givenName} ${standing.Driver.familyName} (${standing.points})`}</a></Link></div>
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