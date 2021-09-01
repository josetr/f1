import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from './List'
import { Loading } from './Loading';
import Error from './Error';
import { SeasonTable, Season } from './Models'
import { fetchSeasonTable } from './Service';

function Seasons() {
	const [seasonTable, setSeasonTable] = useState<SeasonTable | null>();

	useEffect(() => {
		fetchSeasonTable()
			.then(table => {
				table.Seasons.sort((a, b) => b.season - a.season)
				setSeasonTable(table);
			})
			.catch(_ => setSeasonTable(null))
	}, []);

	const renderer = (season: Season) => <Link to={`/seasons/${season.season}`}>{season.season}</Link>

	return <>
		<h1>Seasons</h1>
		{seasonTable === undefined && <Loading />}
		{seasonTable === null && <Error message="Error loading seasons." />}
		{seasonTable && <List data={seasonTable.Seasons} renderer={renderer} keyExtractor={season => season.season} />}
	</>
}

export default Seasons