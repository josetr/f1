import { useState, useEffect } from 'react';
import Link from 'next/link';
import List from '../../components/List'
import { Loading } from '../../components/Loading';
import Error from '../../components/Error';
import { RaceTable, RaceResult } from '../../models/Models'
import { fetchRaceResults } from '../../services/F1Service';
import { useRouter } from 'next/router';

function toSeconds(msx: string) {
  if (msx.length === 0)
    return 0
  const parts = msx.split(':');
  return parseInt(parts[0]) * 60 + parseFloat(parts[1])
}

function RaceComponent() {
  const [raceTable, setRaceTable] = useState<RaceTable | null>();
  const router = useRouter()
  const race = router.query.id as string;
  const season = router.query.season as string;

  function getFastestLap() {
    let fastest = "99:99:99"
    if (!raceTable)
      return

    for (const result of raceTable.Races[0].Results) {
      if (result.FastestLap) {
        if (toSeconds(result.FastestLap.Time.time) < toSeconds(fastest))
          fastest = result.FastestLap.Time.time + ` (${result.Driver.givenName} ${result.Driver.familyName}) `
      }
    }

    return fastest !== "99:99:99" ? fastest : undefined
  }

  useEffect(() => {
    if (!router.isReady)
      return;
    fetchRaceResults(season, race)
      .then(table => setRaceTable(table))
      .catch(_ => setRaceTable(null))
  }, [router.isReady, season, race]);

  const renderer = (result: RaceResult) => <div className="list-item">
    <div><Link href={`/drivers/${result.Driver.driverId}`}>{`#${result.position}`}</Link></div>
    <div className="expand"><Link href={`/drivers/${result.Driver.driverId}`}>{`${result.Driver.givenName} ${result.Driver.familyName}`}</Link></div>
  </div>

  const fastestLap = getFastestLap()

  return <>
    {raceTable && <h1 className="black">{raceTable.Races[0].season} {raceTable.Races[0].raceName}</h1>}
    {!raceTable && <h1>Grand Prix</h1>}
    {raceTable === undefined && <Loading />}
    {raceTable === null && <Error message="Error loading race" />}
    {raceTable && !raceTable.Races[0] && <p className="card">Race not found.</p>}
    {raceTable && fastestLap && <h2 className="card title">Fastest Lap: {fastestLap}</h2>}
    {raceTable && <List data={raceTable.Races[0].Results} renderer={renderer} keyExtractor={result => result.number} two={true}></List>}
  </>
}

export default RaceComponent