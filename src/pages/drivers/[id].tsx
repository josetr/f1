import { useState, useEffect } from 'react';
import { DriverTable, StandingsTable } from '../../models/Models'
import Link from 'next/link';
import { Loading } from '../../components/Loading';
import { fetchDriver, get } from '../../services/F1Service';
import { useRouter } from 'next/router';
import Card from '../../components/Card';

function DriverComponent() {
  const [table, setTable] = useState<StandingsTable>();
  const [driverTable, setDriverTable] = useState<DriverTable | null>();
  const router = useRouter()
  const driverId = router.query.id as string;

  useEffect(() => {
    if (!router.isReady)
      return;

    fetchDriver(driverId)
      .then(table => setDriverTable(table))
      .catch(_ => setDriverTable(null))

    get(`drivers/${driverId}/driverStandings.json`)
      .then(ergast => {
        const table = ergast.data.MRData.StandingsTable
        table.StandingsLists.sort((a, b) => b.season - a.season);
        return setTable(table);
      })
      .catch(_ => setDriverTable(null))
  }, [router.isReady, driverId]);

  const driver = driverTable?.Drivers[0]

  return <>
    <Card>
      {driverTable === undefined && "Loading..."}
      {driverTable === null && "Error loading driver data."}
      {driverTable && driver == null && "Driver doesn't exist."}
      {driver && <a href={driver.url}>{driver.givenName} {driver.familyName}</a>}
      <p>Nationality: {driver?.nationality ?? "Unknown"}</p>
      <p>Born: {driver?.dateOfBirth ?? "Unknown"}</p>
    </Card>
    <table>
      <thead>
        <tr>
          <th>Season</th>
          <th>Team</th>
          <th>Points</th>
          <th>Wins</th>
        </tr>
      </thead>
      <tbody>
        {!table &&
          <tr>
            <td colSpan={4}><Loading /></td>
          </tr>}
        {table && table.StandingsLists.map(standing =>
          <tr key={standing.season}>
            <td><Link href={`/seasons/${standing.season}`}>{standing.season}</Link></td>
            <td><Link href={`/constructors/${standing.DriverStandings[0].Constructors[0].constructorId}`}>{standing.DriverStandings[0].Constructors[0].name}</Link></td>
            <td>{standing.DriverStandings[0].points}</td>
            <td>{standing.DriverStandings[0].wins}</td>
          </tr>)}
      </tbody>
    </table>
  </>
}

export default DriverComponent