import { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { LoadingEllipsis } from './Loading';
import { ConstructorTable, StandingsTable } from './Models'
import { fetchConstructorStandings, fetchConstructorTable } from './Service';

function Constructors({ match }: RouteComponentProps<{ constructor: string }>) {
	const [constructorTable, setConstructorTable] = useState<ConstructorTable | null>();
	const [constructorStanding, setConstructorStanding] = useState<StandingsTable | null>();

	useEffect(() => {
		const constructorId = match.params.constructor

		fetchConstructorTable(constructorId)
			.then(table => setConstructorTable(table))
			.catch(_ => setConstructorTable(null))

		fetchConstructorStandings(constructorId)
			.then(table => {
				table.StandingsLists.sort((a, b) => b.season - a.season)
				return setConstructorStanding(table);
			})
			.catch(_ => setConstructorStanding(null))
	}, [match.params.constructor]);

	var constructor = constructorTable?.Constructors[0]

	return <>
		<div className="card">
			<div>
				{constructorTable === undefined && <LoadingEllipsis />}
				{constructorTable === null && "Error loading constructor."}
				{constructorTable && !constructor && "Constructor doesn't exist."}
				{constructor && <a href={constructor.url}>{constructor.name}</a>}
			</div>
			Nationality: {constructor?.nationality ?? "Unknown"}
		</div>
		<table style={{ margin: "15px" }}>
			<thead>
				<tr><td>Season</td><td>Points</td><td>Wins</td></tr>
			</thead>
			<tbody>
				{constructorStanding === undefined &&
					<tr>
						<td colSpan={4}><LoadingEllipsis /></td>
					</tr>}
				{constructorStanding && constructorStanding.StandingsLists.length > 0 && constructorStanding.StandingsLists.map(standing =>
					<tr key={standing.season}>
						<td><Link to={`/seasons/${standing.season}`}>{standing.season}</Link></td>
						<td>{standing.ConstructorStandings[0].points}</td>
						<td>{standing.ConstructorStandings[0].wins}</td>
					</tr>)}
			</tbody>
		</table>
	</>
}

export default Constructors