import { useState, useEffect } from 'react';
import List from 'components/List'
import { Loading } from 'components/Loading';
import { RaceTable, RaceResult } from 'models/Models'
import { fetchRaceResults, fetchRaces } from 'services/F1Service';
import { useRouter } from 'next/router';
import Card from 'components/Card';
import ListDriverCard from 'components/ListDriverCard';

function toSeconds(msx: string) {
  if (msx.length === 0)
    return 0
  const parts = msx.split(':');
  return parseInt(parts[0]) * 60 + parseFloat(parts[1])
}

function getFastestLapTime(results: RaceResult[]) {
  let fastest = "99:99:99"

  for (const result of results) {
    if (result.FastestLap) {
      if (toSeconds(result.FastestLap.Time.time) < toSeconds(fastest))
        fastest = result.FastestLap.Time.time + ` (${result.Driver.givenName} ${result.Driver.familyName}) `
    }
  }

  return fastest !== "99:99:99" ? fastest : undefined
}

function RaceComponent() {
  const [raceInfoTable, setRaceInfoTable] = useState<RaceTable | null>();
  const [raceResultTable, setRaceResultTable] = useState<RaceTable | null>();
  const router = useRouter()
  const raceId = router.query.id as string;
  const season = router.query.season as string;

  useEffect(() => {
    if (!router.isReady)
      return;
    fetchRaces(season, raceId)
      .then(table => setRaceInfoTable(table))
      .catch(_ => setRaceInfoTable(null))
    fetchRaceResults(season, raceId)
      .then(table => setRaceResultTable(table))
      .catch(_ => setRaceResultTable(null))
  }, [router.isReady, season, raceId]);

  const renderer = (result: RaceResult) => <ListDriverCard
    position={result.position}
    driver={result.Driver}
    showNationality={false}
  />

  const raceInfo = raceInfoTable?.Races[0];
  const raceResults = raceResultTable?.Races[0]?.Results;
  const fastestLap = raceResults ? getFastestLapTime(raceResults) : undefined;

  return <>
    <Card>
      {!raceInfo && <p style={{ color: "var(--primary-color)" }}>Grand Prix</p>}
      {raceInfo && <p><a href={raceInfo.url}>{raceInfo.raceName}</a></p>}
      {(raceInfoTable === undefined || raceResultTable === undefined) && <Loading />}
      {(raceInfoTable === null || raceResultTable === null) && "Error loading race"}
      {raceInfoTable && !raceInfo && "Race not found"}
      {raceInfo && <>
        <p>Country: {raceInfo.Circuit.Location.country}</p>
        <p>Locality: {raceInfo.Circuit.Location.locality}</p>
        <p>Date: {raceInfo.date} {raceInfo.time}</p>
      </>}
      {raceResultTable && fastestLap && <p>Fastest Lap: {fastestLap}</p>}
    </Card>
    {raceResults && <List data={raceResults} renderer={renderer} keyExtractor={result => result.number + result.Driver?.driverId} small={true}></List>}
  </>
}

export default RaceComponent