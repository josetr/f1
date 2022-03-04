import { useRouter } from 'next/router';
import Link from 'next/link';
import '../App.scss'

function App({ Component, pageProps }: any) {
  return (
    <>
      <header className="app-header">
        <nav className="app-nav">
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
      <main className="app-main">
        <Component {...pageProps} />
      </main>
      <footer className="app-footer">
        Copyright (C) 2021 Jose Torres
      </footer>
    </>
  );
}

function NavLink({ activeClassName, href, children }: { activeClassName: string, href: string, children: string }) {
  const router = useRouter();
  const active = router.pathname == href || router.pathname.startsWith(href + "/") ? activeClassName : "";
  return <Link href={href}><a className={active}>{children}</a></Link>
}

export default App;
