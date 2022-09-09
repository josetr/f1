import Link from 'next/link';
import List from 'components/List'
import { Race } from 'api/models'
import { useFetchRaces } from 'api';
import FetchStatus from 'components/FetchStatus';

function Races() {
  const { data: raceTable, mutate: loadRaceTable } = useFetchRaces();

  const renderer = (race: Race) =>
    <div style={{ opacity: new Date(`${race.date} ${race.time}`).getTime() <= Date.now() ? 1 : 0.75 }}>
      <p><Link href={`/races/${race.round}`}>{race.raceName}</Link></p>
      <p>Country: {race.Circuit.Location.country}</p>
      <p>Locality: {race.Circuit.Location.locality}</p>
      <p>Date: {race.date} {race.time}</p>
    </div>

  return <>
    <h1>Races ({raceTable?.season ?? new Date().getFullYear()})</h1>
    {!raceTable
      ? <FetchStatus data={raceTable} name="races" retry={loadRaceTable} page />
      : <List data={raceTable.Races} renderer={renderer} keyExtractor={race => race.raceName}></List>
    }
  </>
}

export default Races