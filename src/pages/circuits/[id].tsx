import { useState, useEffect } from 'react';
import { Loading } from '../../components/Loading';
import Error from '../../components/Error';
import { CircuitTable, Circuit } from '../../models/Models'
import { fetchCircuitTable } from '../../services/F1Service';
import { useRouter } from 'next/router';

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
    <div className="card">
      <div><a href={circuit.url}>{circuit.circuitName}</a></div>
      Country: {circuit.Location.country}
    </div>

  return <>
    <h1>Circuits ({circuitTable?.season ?? new Date().getFullYear()})</h1>
    {circuitTable === undefined && <Loading />}
    {circuitTable === null && <Error message="Error loading circuit." />}
    {circuitTable && circuitTable.Circuits.length <= 0 && <p className="card">Circuit doesn&apos;t exist.</p>}
    {circuitTable && circuitTable.Circuits.length > 0 && CircuitCard(circuitTable.Circuits[0])}
  </>
}

export default CircuitComponent