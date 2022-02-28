import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List'
import { Loading } from '../components/Loading';
import Error from '../components/Error';
import { Constructor, ConstructorTable } from '../models/Models'
import { fetchConstructorTable } from '../services/F1Service';

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