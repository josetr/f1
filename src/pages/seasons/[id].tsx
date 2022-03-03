import { useState, useEffect } from 'react';
import Link from 'next/link'
import List from '../../components/List'
import { Loading } from '../../components/Loading';
import Error from '../../components/Error';
import { RaceTable, Race } from '../../models/Models'
import { fetchSeasonRaceTable } from '../../services/F1Service';
import { useRouter } from 'next/router';

function Seasons() {
  const [raceTable, setRaceTable] = useState<RaceTable | null>();
  const router = useRouter()
  const seasonId = router.query.id as string

  useEffect(() => {
    if (!router.isReady) return;
    fetchSeasonRaceTable(seasonId)
      .then(table => setRaceTable(table))
      .catch(_ => setRaceTable(null));
  }, [router.isReady, seasonId]);

  const renderer = (race: Race) => <div style={{ opacity: new Date(`${race.date} ${race.time}`).getTime() <= Date.now() ? 0.75 : 1 }}>
    <div><Link href={`/races/${race.round}?season=${raceTable?.season}`}>{race.raceName}</Link></div>
    <div>Country: {race.Circuit.Location.country}</div>
    <div>Locality: {race.Circuit.Location.locality}</div>
    <div>Date: {race.date} {race.time}</div>
  </div>

  return <>
    <h1>{raceTable?.season ?? seasonId} Formula 1 World Championship</h1>
    {raceTable === undefined && <Loading />}
    {raceTable === null && <Error message="Error loading season" />}
    {raceTable && raceTable.Races[0] === undefined && <p className="card">Season doesn&apos;t exist.</p>}
    {raceTable && <List data={raceTable.Races} renderer={renderer} keyExtractor={result => result.raceName}></List>}
  </>
}

export default Seasons