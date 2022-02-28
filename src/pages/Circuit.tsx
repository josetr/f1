import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Loading } from '../components/Loading';
import Error from '../components/Error';
import { CircuitTable, Circuit } from '../models/Models'
import { fetchCircuitTable } from '../services/F1Service';

function CircuitComponent({ match }: RouteComponentProps<{ circuit: string }>) {
  const [circuitTable, setCircuitTable] = useState<CircuitTable | null>();

  useEffect(() => {
    fetchCircuitTable(match.params.circuit)
      .then(table => setCircuitTable(table))
      .catch(_ => setCircuitTable(null));
  }, [match.params.circuit]);

  const CircuitCard = (circuit: Circuit) =>
    <div className="card">
      <div><a href={circuit.url}>{circuit.circuitName}</a></div>
      Country: {circuit.Location.country}
    </div>

  return <>
    <h1>Circuits ({circuitTable?.season ?? new Date().getFullYear()})</h1>
    {circuitTable === undefined && <Loading />}
    {circuitTable === null && <Error message="Error loading circuit." />}
    {circuitTable && circuitTable.Circuits.length <= 0 && <p className="card">Circuit doesn't exist.</p>}
    {circuitTable && circuitTable.Circuits.length > 0 && CircuitCard(circuitTable.Circuits[0])}
  </>
}

export default CircuitComponent