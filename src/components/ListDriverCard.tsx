import Link from "next/link";
import { Driver } from "api/models";
import styles from './ListDriverCard.module.scss';

export default function ListDriverCard({ driver, position, points, showNationality = true }: { driver: Driver, position: number, points?: number, showNationality?: boolean }) {
  const pointsText = points ? ` (${points})` : '';

  return <div className={styles.card} style={!showNationality ? { padding: "8px" } : {}}>
    <div className={styles.no}>
      <Link href={`/drivers/${driver.driverId}`} passHref={true}>
        <a>{`#${position}`}</a>
      </Link>
    </div>
    <div className="expand">
      <Link href={`/drivers/${driver.driverId}`} passHref={true}><a>{`${driver.givenName} ${driver.familyName}${pointsText}`}</a></Link>
      {showNationality && <p>Nationality: {driver.nationality}</p>}
    </div>
  </div>
}