import { useState, useEffect } from 'react';
import { Loading } from '../../components/Loading';
import { CircuitTable, Circuit } from '../../models/Models'
import { fetchCircuitTable } from '../../services/F1Service';
import { useRouter } from 'next/router';
import Card from '../../components/Card';

function CircuitComponent() {
  const [circuitTable, setCircuitTable] = useState<CircuitTable | null>();
  const router = useRouter();
  const circuit = router.query.id as string;

  useEffect(() => {
    if (!router.isReady)
      return;
    fetchCircuitTable(circuit)
      .then(table => setCircuitTable(table))
      .catch(_ => setCircuitTable(null));
  }, [router.isReady, circuit]);

  const CircuitCard = (circuit: Circuit) =>
    <Card>
      <a href={circuit.url}>{circuit.circuitName}</a>
      <p>Country: {circuit.Location.country}</p>
    </Card>

  return <>
    {!circuitTable && <Card>
      {circuitTable === undefined && <Loading />}
      {circuitTable === null && "Error loading circuit."}
    </Card>}
    {circuitTable && circuitTable.Circuits.length <= 0 && <Card>Circuit doesn&apos;t exist.</Card>}
    {circuitTable && circuitTable.Circuits.length > 0 && CircuitCard(circuitTable.Circuits[0])}
  </>
}

export default CircuitComponent