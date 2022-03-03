import styles from './Loading.module.scss'

export function LoadingEllipsis() {
  return <div className={styles['lds-ellipsis']}><div></div><div></div><div></div><div></div></div>
}

export function Loading({ title }: { title?: string; }) {
  return <>
    {title && <h1>{title}</h1>}
    {<p className="card"><LoadingEllipsis /></p>}
  </>;
}
