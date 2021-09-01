import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from './List'
import { Loading } from './Loading';
import Error from './Error';
import { DriverStanding, StandingsEntry } from './Models'
import { fetchDriverStandings } from './Service';

function Drivers() {
	const [drivers, setDrivers] = useState<StandingsEntry | null>();

	useEffect(() => {
		fetchDriverStandings()
			.then(data => setDrivers(data.StandingsLists[0]))
			.catch(_ => setDrivers(null));
	}, []);

	const renderer = (standing: DriverStanding) => <div style={{ display: "flex" }}>
		<div>
			<Link to={`/drivers/${standing.Driver.driverId}`} style={{ padding: "6px", display: "inline-block" }}>#{standing.position}</Link>
		</div>
		<div style={{ flex: "1" }}>
			<div><Link to={`/drivers/${standing.Driver.driverId}`}>{standing.Driver.givenName} {standing.Driver.familyName} ({standing.points})</Link></div>
			<div>Nationality: {standing.Driver.nationality}</div>
		</div>
	</div>

	return <>
		<h1>Drivers ({drivers?.season ?? new Date().getFullYear()})</h1>
		{drivers === undefined && <Loading />}
		{drivers === null && <Error message="Error loading drivers" />}
		{drivers && <List data={drivers.DriverStandings} renderer={renderer} keyExtractor={standing => standing.Driver.driverId} two={true} />}
	</>
}

export default Drivers