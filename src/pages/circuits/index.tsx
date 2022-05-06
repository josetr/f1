import { useState, useEffect } from 'react';
import Link from 'next/link';
import List from '../../components/List'
import { Loading } from '../../components/Loading';
import { Circuit, CircuitTable } from '../../models/Models'
import { fetchCircuitTable } from '../../services/F1Service';
import Card from '../../components/Card';

function Circuits() {
  const [circuitTable, setCircuitTable] = useState<CircuitTable | null>();

  useEffect(() => {
    fetchCircuitTable()
      .then(table => setCircuitTable(table))
      .catch(_ => setCircuitTable(null))
  }, []);

  const renderer = (circuit: Circuit) => <>
    <p><Link href={`/circuits/${circuit.circuitId}`}>{circuit.circuitName}</Link></p>
    <p>Country: {circuit.Location.country}</p>
  </>

  return <>
    <h1>Circuits ({circuitTable?.season ?? new Date().getFullYear()})</h1>
    {!circuitTable && <Card>
      {circuitTable === undefined && <Loading />}
      {circuitTable === null && "Error loading circuits"}
    </Card>}
    {circuitTable && <List data={circuitTable.Circuits} renderer={renderer} keyExtractor={circuit => circuit.circuitName} />}
  </>
}

export default Circuits