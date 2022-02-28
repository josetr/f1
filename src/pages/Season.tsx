import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import List from '../components/List'
import { Loading } from '../components/Loading';
import Error from '../components/Error';
import { RaceTable, Race } from '../models/Models'
import { fetchSeasonRaceTable } from '../services/F1Service';

function Seasons({ match }: RouteComponentProps<{ season: string }>) {
  const [raceTable, setRaceTable] = useState<RaceTable | null>();

  useEffect(() => {
    fetchSeasonRaceTable(match.params.season)
      .then(table => setRaceTable(table))
      .catch(_ => setRaceTable(null));
  }, [match.params.season]);

  const renderer = (race: Race) => <div style={{ opacity: new Date(`${race.date} ${race.time}`).getTime() <= Date.now() ? 0.75 : 1 }}>
    <div><Link to={`/races/${raceTable?.season}/${race.round}`}>{race.raceName}</Link></div>
    <div>Country: {race.Circuit.Location.country}</div>
    <div>Locality: {race.Circuit.Location.locality}</div>
    <div>Date: {race.date} {race.time}</div>
  </div>

  return <>
    <h1>{raceTable?.season ?? match.params.season} Formula 1 World Championship</h1>
    {raceTable === undefined && <Loading />}
    {raceTable === null && <Error message="Error loading season" />}
    {raceTable && raceTable.Races[0] === undefined && <p className="card">Season doesn't exist.</p>}
    {raceTable && <List data={raceTable.Races} renderer={renderer} keyExtractor={result => result.raceName}></List>}
  </>
}

export default Seasons