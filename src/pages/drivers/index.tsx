import List from 'components/List'
import { DriverStanding } from 'api/models'
import { useFetchSeasonDriverStandings } from 'api';
import ListDriverCard from 'components/ListDriverCard'
import FetchStatus from 'components/FetchStatus';

export default function Drivers() {
  const { data: standings, mutate: loadStandings } = useFetchSeasonDriverStandings();
  const drivers = standings?.StandingsLists[0];

  const renderer = (standing: DriverStanding) => <ListDriverCard
    driver={standing.Driver}
    position={standing.position}
    points={standing.points}
  />

  return <>
    <h1>Drivers ({drivers?.season ?? new Date().getFullYear()})</h1>
    {!drivers
      ? <FetchStatus data={standings} name="drivers" retry={loadStandings} page />
      : <List data={drivers.DriverStandings} renderer={renderer} keyExtractor={standing => standing.Driver.driverId} small={true} />
    }
  </>
}
