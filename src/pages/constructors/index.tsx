import Link from 'next/link';
import List from 'components/List'
import { Constructor } from 'api/models'
import { useFetchConstructorTable } from 'api';
import FetchStatus from 'components/FetchStatus';

export default function Constructors() {
  const { data: constructorTable, mutate: loadConstructorTable } = useFetchConstructorTable();

  const renderer = (constructor: Constructor) => <>
    <p><Link href={`/constructors/${constructor.constructorId}`}>{constructor.name}</Link></p>
    <p>Nationality: {constructor.nationality}</p>
  </>

  return <>
    <h1>Constructors ({constructorTable?.season ?? new Date().getFullYear()})</h1>
    {!constructorTable
      ? <FetchStatus name="constructors" data={constructorTable} retry={loadConstructorTable} page />
      : <List data={constructorTable.Constructors} renderer={renderer} keyExtractor={constructor => constructor.name} small={true} />
    }
  </>
}
