import 'App.scss'
import styles from './_app.module.scss'
import Head from 'next/head';
import NavLink from 'components/NavLink';

export default function App({ Component, pageProps }: any) {
  return (
    <>
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
        Copyright (C) 2021 Jose Torres
      </footer>
    </>
  );
}
