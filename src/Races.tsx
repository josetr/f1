import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from './List'
import { Loading } from './Loading';
import Error from './Error';
import { RaceTable, Race } from './Models'
import { fetchRaces } from './Service';

function Races() {
	const [raceTable, setRaceTable] = useState<RaceTable | null>();

	useEffect(() => {
		fetchRaces()
			.then(table => setRaceTable(table))
			.catch(_ => setRaceTable(null))
	}, []);

	const renderer = (race: Race) => <div style={{ opacity: new Date(`${race.date} ${race.time}`).getTime() <= Date.now() ? 0.75 : 1 }}>
		<div><Link to={`/races/${race.round}`}>{race.raceName}</Link></div>
		<div>Country: {race.Circuit.Location.country}</div>
		<div>Locality: {race.Circuit.Location.locality}</div>
		<div>Date: {race.date} {race.time}</div>
	</div>

	return <>
		<h1>Races ({raceTable?.season ?? new Date().getFullYear()})</h1>
		{raceTable === undefined && <Loading />}
		{raceTable === null && <Error message="Error loading races" />}
		{raceTable && <List data={raceTable.Races} renderer={renderer} keyExtractor={race => race.raceName}></List>}
	</>
}

export default Races