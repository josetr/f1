import { useState, useEffect } from 'react';
import Link from 'next/link';
import List from 'components/List'
import { Loading } from 'components/Loading';
import { RaceTable, Race } from 'models/Models'
import { fetchRaces } from 'services/F1Service';
import Card from 'components/Card';

function Races() {
  const [raceTable, setRaceTable] = useState<RaceTable | null>();

  useEffect(() => {
    fetchRaces()
      .then(table => setRaceTable(table))
      .catch(_ => setRaceTable(null))
  }, []);

  const renderer = (race: Race) =>
    <div style={{ opacity: new Date(`${race.date} ${race.time}`).getTime() <= Date.now() ? 1 : 0.75 }}>
      <p><Link href={`/races/${race.round}`}>{race.raceName}</Link></p>
      <p>Country: {race.Circuit.Location.country}</p>
      <p>Locality: {race.Circuit.Location.locality}</p>
      <p>Date: {race.date} {race.time}</p>
    </div>

  return <>
    <h1>Races ({raceTable?.season ?? new Date().getFullYear()})</h1>
    {!raceTable && <Card>
      {raceTable === undefined && <Loading />}
      {raceTable === null && "Error loading races"}
    </Card>}
    {raceTable && <List data={raceTable.Races} renderer={renderer} keyExtractor={race => race.raceName}></List>}
  </>
}

export default Races