import { useCallback } from 'react';
import Link from 'next/link'
import List from 'components/List'
import { RaceTable, Race } from 'api/models'
import { fetchSeasonRaceTable } from 'api';
import { useRouter } from 'next/router';
import Card from 'components/Card';
import useFetch from 'hooks/useFetch';
import FetchStatus from 'components/FetchStatus';

export default function Seasons() {
  const router = useRouter()
  const seasonId = router.query.id as string
  const fetchRaceTableById = useCallback(() => fetchSeasonRaceTable(seasonId), [seasonId]);
  const [raceTable, loadRaceTable] = useFetch<RaceTable | null>(fetchRaceTableById);

  const renderer = (race: Race) => <div style={{ opacity: new Date(`${race.date}` + (race.time ? " " + race.time : "")).getTime() <= Date.now() ? 1 : 0.75 }}>
    <p><Link href={`/races/${race.round}?season=${raceTable?.season}`}>{race.raceName}</Link></p>
    <p>Country: {race.Circuit.Location.country}</p>
    <p>Locality: {race.Circuit.Location.locality}</p>
    <p>Date: {race.date} {race.time}</p>
  </div>

  return <>
    <h1>{raceTable?.season ?? seasonId} Formula 1 World Championship</h1>
    {!raceTable
      ? <FetchStatus name="season" data={raceTable} retry={loadRaceTable} page />
      : <>
        <List data={raceTable.Races} renderer={renderer} keyExtractor={result => result.raceName}></List>
        {raceTable.Races[0] === undefined && <Card>Season doesn&apos;t exist.</Card>}
      </>}
  </>
}
