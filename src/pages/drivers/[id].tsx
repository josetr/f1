import Link from 'next/link';
import { useFetchDriver, useFetchDriverStandings } from 'api';
import { useRouter } from 'next/router';
import Card from 'components/Card';
import FetchStatus from 'components/FetchStatus';

export default function DriverComponent() {
  const router = useRouter()
  const driverId = router.query.id as string;
  const {data: driverTable, mutate: loadDriverTable} = useFetchDriver(driverId);
  const {data: table, mutate: loadTable} = useFetchDriverStandings(driverId);

  const driver = driverTable?.Drivers[0]

  return <>
    <Card>
      <FetchStatus name="driver data" data={driverTable} retry={loadDriverTable} />
      {driverTable && !driver && "Driver doesn't exist."}
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
            <td colSpan={4}>
              <FetchStatus name="driver data" data={table} retry={loadTable} />
            </td>
          </tr>}
        {table && table.StandingsLists.sort((a, b) => b.season - a.season).map(standing =>
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
