import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import List from '../components/List'
import { Loading } from '../components/Loading';
import Error from '../components/Error';
import { Circuit, CircuitTable } from '../models/Models'
import { fetchCircuitTable } from '../services/F1Service';

function Circuits() {
  const [circuitTable, setCircuitTable] = useState<CircuitTable | null>();

  useEffect(() => {
    fetchCircuitTable()
      .then(table => setCircuitTable(table))
      .catch(_ => setCircuitTable(null))
  }, []);

  const renderer = (circuit: Circuit) => <>
    <div><Link to={`/circuits/${circuit.circuitId}`}>{circuit.circuitName}</Link></div>
    Country: {circuit.Location.country}
  </>

  return <>
    <h1>Circuits ({circuitTable?.season ?? new Date().getFullYear()})</h1>
    {circuitTable === undefined && <Loading />}
    {circuitTable === null && <Error message="Error loading circuits" />}
    {circuitTable && <List data={circuitTable.Circuits} renderer={renderer} keyExtractor={circuit => circuit.circuitName} />}
  </>
}

export default Circuits