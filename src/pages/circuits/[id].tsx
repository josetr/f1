import { useCallback } from 'react';
import { CircuitTable, Circuit } from 'api/models'
import { fetchCircuitTable } from 'api';
import { useRouter } from 'next/router';
import Card from 'components/Card';
import useFetch from 'hooks/useFetch';
import FetchStatus from 'components/FetchStatus';

export default function CircuitComponent() {
  const router = useRouter();
  const circuitId = router.query.id as string;
  const fetchCircuitTableById = useCallback(() => fetchCircuitTable(circuitId), [circuitId])
  const [circuitTable, loadCircuitTable] = useFetch<CircuitTable>(fetchCircuitTableById);
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