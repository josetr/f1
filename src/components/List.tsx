import styles from './List.module.scss'

function r<T>(list: T[], renderer: (item: T) => JSX.Element, keyExtractor: (item: T) => string | number) {
  return list.map((driver) => <li key={keyExtractor(driver)}> {renderer(driver)} </li>)
}

export default function List<T>({ data, renderer, keyExtractor, two }: { data: T[], renderer: (item: T) => JSX.Element, keyExtractor: (item: T) => string | number, two?: boolean }) {
  return <div className={styles.list} style={{ maxWidth: two ? "700px" : "" }}>
    <ul>{r(data, renderer, keyExtractor)}</ul>
  </div>
}