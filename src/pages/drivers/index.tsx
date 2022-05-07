import { useState, useEffect } from 'react';
import List from 'components/List'
import { Loading } from 'components/Loading';
import { DriverStanding, StandingsEntry } from 'models/Models'
import { fetchDriverStandings } from 'services/F1Service';
import ListDriverCard from 'components/ListDriverCard'
import Card from 'components/Card';

function Drivers() {
  const [drivers, setDrivers] = useState<StandingsEntry | null>();

  useEffect(() => {
    fetchDriverStandings()
      .then(data => setDrivers(data.StandingsLists[0]))
      .catch(_ => setDrivers(null));
  }, []);

  const renderer = (standing: DriverStanding) => <ListDriverCard
    driver={standing.Driver}
    position={standing.position}
    points={standing.points}
  />

  return <>
    <h1>Drivers ({drivers?.season ?? new Date().getFullYear()})</h1>
    {!drivers && <Card>
      {drivers === undefined && <Loading />}
      {drivers === null && "Error loading drivers"}
    </Card>
    }
    {drivers && <List data={drivers.DriverStandings} renderer={renderer} keyExtractor={standing => standing.Driver.driverId} small={true} />}
  </>
}

export default Drivers