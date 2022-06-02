import Link from 'next/link';
import List from 'components/List'
import { Constructor, ConstructorTable } from 'api/models'
import { fetchConstructorTable } from 'api';
import FetchStatus from 'components/FetchStatus';
import useFetch from 'hooks/useFetch';

export default function Constructors() {
  const [constructorTable, loadConstructorTable] = useFetch<ConstructorTable>(fetchConstructorTable);

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
