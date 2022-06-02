import styles from './LoadingRing.module.scss'

export default function LoadingRing() {
  return <div className={styles['lds-ring']}><div></div><div></div><div></div><div></div></div>
}
