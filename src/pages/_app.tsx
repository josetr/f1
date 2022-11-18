import 'App.scss'
import styles from './_app.module.scss'
import Head from 'next/head';
import NavLink from 'components/NavLink';
import { SWRConfig } from "swr";

export default function App({ Component, pageProps }: any) {
  return (
    <SWRConfig value={{ provider: localStorageProvider }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Formula 1</title>
      </Head>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink activeClassName="active-link" href="/">Home</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" href="/drivers">Drivers</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" href="/races">Races</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" href="/constructors">Constructors</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" href="/circuits">Circuits</NavLink>
            </li>
            <li>
              <NavLink activeClassName="active-link" href="/seasons">Seasons</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles.main_background}>
        <main className={styles.main}>
          <Component {...pageProps} />
        </main>
      </div>
      <footer className={styles.footer}>
        Copyright © 2021-2022 José Torres
      </footer>
    </SWRConfig>
  );
}

function localStorageProvider() {
  if (typeof window === "undefined")
    return new Map();
  const map = new Map(JSON.parse(localStorage.getItem('app-cache') || '[]'))
  window.addEventListener('beforeunload', () => {
    const appCache = JSON.stringify(Array.from(map.entries()))
    localStorage.setItem('app-cache', appCache)
  })
  return map;
};
