import Link from 'next/link';
import List from 'components/List'
import { Circuit, CircuitTable } from 'api/models'
import { fetchCircuitTable } from 'api';
import FetchStatus from 'components/FetchStatus';
import useFetch from 'hooks/useFetch';

function Circuits() {
  const [circuitTable, loadCircuitTable] = useFetch<CircuitTable>(fetchCircuitTable);

  const renderer = (circuit: Circuit) => <>
    <p><Link href={`/circuits/${circuit.circuitId}`}>{circuit.circuitName}</Link></p>
    <p>Country: {circuit.Location.country}</p>
  </>

  return <>
    <h1>Circuits ({circuitTable?.season ?? new Date().getFullYear()})</h1>
    {!circuitTable
      ? <FetchStatus data={circuitTable} name="circuits" retry={loadCircuitTable} card={true} />
      : <List data={circuitTable.Circuits} renderer={renderer} keyExtractor={circuit => circuit.circuitName} />
    }
  </>
}

export default Circuits