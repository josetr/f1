import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from './List'
import { Loading } from './Loading';
import Error from './Error';
import { Constructor, ConstructorTable } from './Models'
import { fetchConstructorTable } from './Service';

function Constructors() {
	const [constructorTable, setConstructorTable] = useState<ConstructorTable | null>();

	useEffect(() => {
		fetchConstructorTable()
			.then(table => setConstructorTable(table))
			.catch(_ => setConstructorTable(null));
	}, []);

	const renderer = (constructor: Constructor) => <>
		<div><Link to={`/constructors/${constructor.constructorId}`}>{constructor.name}</Link></div>
		Nationality: {constructor.nationality}
	</>

	return <>
		<h1>Constructors ({constructorTable?.season ?? new Date().getFullYear()})</h1>
		{constructorTable === undefined && <Loading />}
		{constructorTable === null && <Error message="Error loading constructors" />}
		{constructorTable && <List data={constructorTable.Constructors} renderer={renderer} keyExtractor={constructor => constructor.name} two={true} />}
	</>
}

export default Constructors