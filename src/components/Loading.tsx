import styles from './Loading.module.scss'

export function Loading() {
  return <div className={styles['lds-container']}><div className={styles['lds-ellipsis']}><div></div><div></div><div></div><div></div></div></div>
}
