import Link from "next/link";
import { Loading } from "components/Loading";
import { Driver, Constructor } from "api/models";
import { useFetchConstructorLeader, useFetchDriverLeader, useFetchFastestLap, useFetchLastPole, useFetchLastWinner } from "api";
import styles from './index.module.scss'
import RetryLink from "components/RetryLink";

export default function Home() {
  const { data: fastest, mutate: loadFastest } = useFetchFastestLap();
  const { data: winner, mutate: loadWinner } = useFetchLastWinner();
  const { data: leader, mutate: loadLeader } = useFetchDriverLeader();
  const { data: constructorLeader, mutate: loadConstructorLeader } = useFetchConstructorLeader();
  const { data: quali, mutate: loadQuali } = useFetchLastPole();

  function error<T>(obj: T, fetch: () => void) {
    return (obj === undefined ? <Loading /> : <div>Network Error. <RetryLink onClick={fetch} /></div>);
  }

  function getName(driver: Driver | undefined | null, fetch: () => void) {
    return driver ? <Link href={`/drivers/${driver.driverId}`}>{`${driver.givenName} ${driver.familyName}`}</Link> : error(driver, fetch);
  }

  function getConstructorName(constructor: Constructor | undefined | null, fetch: () => void) {
    return constructor ? <Link href={`/constructors/${constructor.constructorId}`}>{constructor.name}</Link> : error(constructor, fetch);
  }

  return <>
    <h1>Formula 1</h1>
    <table className={styles.summary}>
      <tbody>
        <tr>
          <th>Constructor Leader</th>
          <td>{getConstructorName(constructorLeader, loadConstructorLeader)} </td>
        </tr>
        <tr>
          <th>Driver Leader</th>
          <td>{getName(leader, loadLeader)}</td>
        </tr>
        <tr>
          <th>Last Winner</th>
          <td>{getName(winner, loadWinner)}</td>
        </tr>
        <tr>
          <th>Last Pole</th>
          <td>{getName(quali, loadQuali)}</td>
        </tr>
        <tr>
          <th>Last Fastest Lap</th>
          <td>{getName(fastest, loadFastest)}</td>
        </tr>
      </tbody>
    </table>
  </>
}
