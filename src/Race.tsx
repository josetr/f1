import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import List from './List'
import { Loading } from './Loading';
import Error from './Error';
import { RaceTable, RaceResult } from './Models'
import { fetchRaceResults } from './Service';

function toSeconds(msx: string) {
	if (msx.length === 0)
		return 0
	var parts = msx.split(':');
	return parseInt(parts[0]) * 60 + parseFloat(parts[1])
}

function RaceComponent({ match }: RouteComponentProps<{ season: string, race: string }>) {
	const [raceTable, setRaceTable] = useState<RaceTable | null>();

	function getFastestLap() {
		let fastest = "99:99:99"
		if (!raceTable)
			return

		for (let result of raceTable.Races[0].Results) {
			if (result.FastestLap) {
				if (toSeconds(result.FastestLap.Time.time) < toSeconds(fastest))
					fastest = result.FastestLap.Time.time + ` (${result.Driver.givenName} ${result.Driver.familyName}) `
			}
		}

		return fastest !== "99:99:99" ? fastest : undefined
	}

	useEffect(() => {
		fetchRaceResults(match.params.season, match.params.race)
			.then(table => setRaceTable(table))
			.catch(_ => setRaceTable(null))
	}, [match.params.season, match.params.race]);

	const renderer = (result: RaceResult) => <div style={{ padding: "6px", display: "flex" }}>
		<div><Link to={`/drivers/${result.Driver.driverId}`}>#{result.position}</Link></div>
		<div style={{ flex: "1" }}><Link to={`/drivers/${result.Driver.driverId}`}>{result.Driver.givenName} {result.Driver.familyName}</Link></div>
	</div>

	const fastestLap = getFastestLap()

	return <>
		{raceTable && <h1 style={{ color: "black" }}>{raceTable.Races[0].season} {raceTable.Races[0].raceName}</h1>}
		{!raceTable && <h1>Grand Prix</h1>}
		{raceTable === undefined && <Loading />}
		{raceTable === null && <Error message="Error loading race" />}
		{raceTable && !raceTable.Races[0] && <p className="card">Race not found.</p>}
		{raceTable && fastestLap && <h2 style={{ padding: "10px", fontSize: "18px" }} className="card">Fastest Lap: {fastestLap}</h2>}
		{raceTable && <List data={raceTable.Races[0].Results} renderer={renderer} keyExtractor={result => result.number} two={true}></List>}
	</>
}

export default RaceComponent