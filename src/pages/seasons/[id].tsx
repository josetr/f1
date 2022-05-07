import { useState, useEffect } from 'react';
import Link from 'next/link'
import List from 'components/List'
import { Loading } from 'components/Loading';
import { RaceTable, Race } from 'models/Models'
import { fetchSeasonRaceTable } from 'services/F1Service';
import { useRouter } from 'next/router';
import Card from 'components/Card';

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

  const renderer = (race: Race) => <div style={{ opacity: new Date(`${race.date}` + (race.time ? " " + race.time : "")).getTime() <= Date.now() ? 1 : 0.75 }}>
    <p><Link href={`/races/${race.round}?season=${raceTable?.season}`}>{race.raceName}</Link></p>
    <p>Country: {race.Circuit.Location.country}</p>
    <p>Locality: {race.Circuit.Location.locality}</p>
    <p>Date: {race.date} {race.time}</p>
  </div >

  return <>
    <h1>{raceTable?.season ?? seasonId} Formula 1 World Championship</h1>
    {!raceTable?.Races?.[0] && <Card>
      {raceTable === undefined && <Loading />}
      {raceTable === null && "Error loading season"}
      {raceTable && raceTable.Races[0] === undefined && "Season doesn't exist."}
    </Card>}
    {raceTable && <List data={raceTable.Races} renderer={renderer} keyExtractor={result => result.raceName}></List>}
  </>
}

export default Seasons