import { useState, useEffect } from 'react';
import { DriverTable, StandingsTable } from '../models/Models'
import { Link, RouteComponentProps } from 'react-router-dom';
import { LoadingEllipsis } from '../components/Loading';
import { fetchDriver, get } from '../services/F1Service';

function DriverComponent({ match }: RouteComponentProps<{ driver: string }>) {
  const [table, setTable] = useState<StandingsTable>();
  const [driverTable, setDriverTable] = useState<DriverTable | null>();

  useEffect(() => {
    fetchDriver(match.params.driver)
      .then(table => setDriverTable(table))
      .catch(_ => setDriverTable(null))

    get(`drivers/${match.params.driver}/driverStandings.json`)
      .then(ergast => {
        const table = ergast.data.MRData.StandingsTable
        table.StandingsLists.sort((a, b) => b.season - a.season);
        return setTable(table);
      })
      .catch(_ => setDriverTable(null))
  }, [match.params.driver]);

  const driver = driverTable?.Drivers[0]

  return <>
    <div className="card">
      <div>
        {driverTable === undefined && "Loading..."}
        {driverTable === null && "Error loading driver data."}
        {driverTable && driver == null && "Driver doesn't exist."}
        {driver && <a href={driver.url}>{driver.givenName} {driver.familyName}</a>}
      </div>
      <div>Nationality: {driver?.nationality ?? "Unknown"}</div>
      <div>Born: {driver?.dateOfBirth ?? "Unknown"}</div>
    </div>
    <table style={{ margin: "15px" }}>
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
            <td colSpan={4}><LoadingEllipsis /></td>
          </tr>}
        {table && table.StandingsLists.map(standing =>
          <tr key={standing.season}>
            <td><Link to={`/seasons/${standing.season}`}>{standing.season}</Link></td>
            <td><Link to={`/constructors/${standing.DriverStandings[0].Constructors[0].constructorId}`}>{standing.DriverStandings[0].Constructors[0].name}</Link></td>
            <td>{standing.DriverStandings[0].points}</td>
            <td>{standing.DriverStandings[0].wins}</td>
          </tr>)}
      </tbody>
    </table>
  </>
}

export default DriverComponent