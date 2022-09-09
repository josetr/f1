import { useFetchCircuitTable } from 'api';
import { useRouter } from 'next/router';
import Card from 'components/Card';
import FetchStatus from 'components/FetchStatus';

export default function CircuitComponent() {
  const router = useRouter();
  const circuitId = router.query.id as string;
  const { data: circuitTable, mutate: loadCircuitTable } = useFetchCircuitTable(circuitId);
  const circuit = circuitTable?.Circuits[0];

  return <Card>
    {!circuitTable
      ? <FetchStatus name="circuit" data={circuitTable} retry={loadCircuitTable} />
      : !circuit
        ? "Circuit doesn't exist."
        : <>
          <a href={circuit.url}>{circuit.circuitName}</a>
          <p>Country: {circuit.Location.country}</p>
        </>
    }
  </Card>
}