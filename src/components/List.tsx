import styles from './List.module.scss'

function r<T>(list: T[], renderer: (item: T) => JSX.Element, keyExtractor: (item: T) => string | number) {
  return list.map((driver) => <li key={keyExtractor(driver)}> {renderer(driver)} </li>)
}

export interface ListProps<T> {
  data: T[];
  renderer: (item: T) => JSX.Element;
  keyExtractor: (item: T) => string | number;
  small?: boolean;
}

export default function List<T>({ data, renderer, keyExtractor, small }: ListProps<T>) {
  return <div>
    <ul className={styles.list} style={{ maxWidth: small ? "700px" : undefined }}>{r(data, renderer, keyExtractor)}</ul>
  </div>
}