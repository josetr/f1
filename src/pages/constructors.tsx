import { useState, useEffect } from 'react';
import Link from 'next/link';
import List from '../components/List'
import { Loading } from '../components/Loading';
import { Constructor, ConstructorTable } from '../models/Models'
import { fetchConstructorTable } from '../services/F1Service';
import Card from '../components/Card';

function Constructors() {
  const [constructorTable, setConstructorTable] = useState<ConstructorTable | null>();

  useEffect(() => {
    fetchConstructorTable()
      .then(table => setConstructorTable(table))
      .catch(_ => setConstructorTable(null));
  }, []);

  const renderer = (constructor: Constructor) => <>
    <p><Link href={`/constructors/${constructor.constructorId}`}>{constructor.name}</Link></p>
    <p>Nationality: {constructor.nationality}</p>
  </>

  return <>
    <h1>Constructors ({constructorTable?.season ?? new Date().getFullYear()})</h1>
    {!constructorTable && <Card>
      {constructorTable === undefined && <Loading />}
      {constructorTable === null && "Error loading constructors"}
    </Card>}
    {constructorTable && <List data={constructorTable.Constructors} renderer={renderer} keyExtractor={constructor => constructor.name} small={true} />}
  </>
}

export default Constructors