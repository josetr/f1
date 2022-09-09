import Link from 'next/link';
import List from 'components/List'
import { Circuit } from 'api/models'
import { useFetchCircuitTable } from 'api';
import FetchStatus from 'components/FetchStatus';

function Circuits() {
  const { data: circuitTable, mutate: loadCircuitTable } = useFetchCircuitTable();

  const renderer = (circuit: Circuit) => <>
    <p><Link href={`/circuits/${circuit.circuitId}`}>{circuit.circuitName}</Link></p>
    <p>Country: {circuit.Location.country}</p>
  </>

  return <>
    <h1>Circuits ({circuitTable?.season ?? new Date().getFullYear()})</h1>
    {!circuitTable
      ? <FetchStatus data={circuitTable} name="circuits" retry={loadCircuitTable} page />
      : <List data={circuitTable.Circuits} renderer={renderer} keyExtractor={circuit => circuit.circuitName} />
    }
  </>
}

export default Circuits