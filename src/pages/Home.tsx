import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { LoadingEllipsis } from "../components/Loading";
import { Driver, Constructor } from "../models/Models";
import { get } from "../services/F1Service";

function Home() {
  const [fastest, setFastest] = useState<Driver | null>()
  const [winner, setWinner] = useState<Driver | null>()
  const [leader, setLeader] = useState<Driver | null>()
  const [constructorLeader, setConstructorLeader] = useState<Constructor | null>()
  const [quali, setQuali] = useState<Driver | null>()

  useEffect(() => {
    get(`current/last/constructorStandings.json?limit=1`)
      .then(response => setConstructorLeader(response.data.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[0].Constructor))
      .catch(_ => setConstructorLeader(null))

    get(`current/last/driverStandings.json?limit=1`)
      .then(response => setLeader(response.data.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver))
      .catch(_ => setLeader(null))

    get(`current/last/qualifying.json?limit=1`)
      .then(response => setQuali(response.data.MRData.RaceTable.Races[0].QualifyingResults[0].Driver))
      .catch(_ => setQuali(null))

    get(`current/last/results.json?limit=1`)
      .then(response => setWinner(response.data.MRData.RaceTable.Races[0].Results[0].Driver))
      .catch(_ => setWinner(null))

    get(`current/last/fastest/1/results.json?limit=1`)
      .then(response => setFastest(response.data.MRData.RaceTable.Races[0].Results[0].Driver))
      .catch(_ => setFastest(null))
  }, []);

  function getName(driver: Driver | undefined | null) {
    return driver ? <Link to={`/drivers/${driver.driverId}`}>{driver.givenName} {driver.familyName}</Link> : (driver === undefined ? <LoadingEllipsis /> : "Network Error")
  }

  function getConstructorName(constructor: Constructor | undefined | null) {
    return constructor ? <Link to={`/constructors/${constructor.constructorId}`}>{constructor.name}</Link> : (constructor === undefined ? <LoadingEllipsis /> : "Network Error")
  }

  return <>
    <h1>Formula 1</h1>
    <table className="home-summary">
      <tbody>
        <tr>
          <th>Constructor Leader</th>
          <td>{getConstructorName(constructorLeader)}</td>
        </tr>
        <tr>
          <th>Driver Leader</th>
          <td>{getName(leader)}</td>
        </tr>
        <tr>
          <th>Last Winner</th>
          <td>{getName(winner)}</td>
        </tr>
        <tr>
          <th>Last Pole</th>
          <td>{getName(quali)}</td>
        </tr>
        <tr>
          <th>Last Fastest Lap</th>
          <td>{getName(fastest)}</td>
        </tr>
      </tbody>
    </table>
  </>
}

export default Home