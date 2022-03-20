import { useEffect, useState } from "react";
import Link from "next/link";
import { Loading } from "../components/Loading";
import { Driver, Constructor } from "../models/Models";
import { fetchConstructorLeader, fetchDriverLeader, fetchFastestLap, fetchLastPole, fetchLastWinner } from "../services/F1Service";
import styles from './index.module.scss'

function Home() {
  const [fastest, setFastest] = useState<Driver | null>()
  const [winner, setWinner] = useState<Driver | null>()
  const [leader, setLeader] = useState<Driver | null>()
  const [constructorLeader, setConstructorLeader] = useState<Constructor | null>()
  const [quali, setQuali] = useState<Driver | null>()

  useEffect(() => {
    fetchConstructorLeader()
      .then(constructor => setConstructorLeader(constructor))
      .catch(_ => setConstructorLeader(null))

    fetchDriverLeader()
      .then(response => setLeader(response))
      .catch(_ => setLeader(null))

    fetchLastPole()
      .then(driver => setQuali(driver))
      .catch(_ => setQuali(null))

    fetchLastWinner()
      .then(driver => setWinner(driver))
      .catch(_ => setWinner(null))

    fetchFastestLap()
      .then(driver => setFastest(driver))
      .catch(_ => setFastest(null))
  }, []);

  function getName(driver: Driver | undefined | null) {
    return driver ? <Link href={`/drivers/${driver.driverId}`}>{`${driver.givenName} ${driver.familyName}`}</Link> : (driver === undefined ? <Loading /> : "Network Error")
  }

  function getConstructorName(constructor: Constructor | undefined | null) {
    return constructor ? <Link href={`/constructors/${constructor.constructorId}`}>{constructor.name}</Link> : (constructor === undefined ? <Loading /> : "Network Error")
  }

  return <>
    <h1>Formula 1</h1>
    <table className={styles.summary}>
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