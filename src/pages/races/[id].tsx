import { useCallback } from 'react';
import List from 'components/List'
import { Loading } from 'components/Loading';
import { RaceTable, RaceResult } from 'api/models'
import { fetchRaceResults, fetchRaces } from 'api';
import { useRouter } from 'next/router';
import Card from 'components/Card';
import ListDriverCard from 'components/ListDriverCard';
import useFetch from 'hooks/useFetch';
import LoadingError from 'components/LoadingError';

export default function RaceComponent() {
  const router = useRouter()
  const raceId = router.query.id as string;
  const season = router.query.season as string;
  const fetchRacesById = useCallback(() => fetchRaces(season, raceId), [season, raceId]);
  const fetchRaceResultsById = useCallback(() => fetchRaceResults(season, raceId), [season, raceId]);
  const [raceInfoTable, loadRaceInfoTable] = useFetch<RaceTable>(fetchRacesById);
  const [raceResultTable, loadRaceResultTable] = useFetch<RaceTable>(fetchRaceResultsById);

  const reload = () => {
    if (raceInfoTable === null) loadRaceInfoTable();
    if (raceResultTable === null) loadRaceResultTable()
  }

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
      {!raceInfo
        ? <p style={{ color: "var(--primary-color)" }}>Grand Prix</p>
        : <p><a href={raceInfo.url}>{raceInfo.raceName}</a></p>
      }
      {(raceInfoTable === undefined || raceResultTable === undefined) && <Loading />}
      {(raceInfoTable === null || raceResultTable === null) && <LoadingError name="race" retry={reload} />}
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
