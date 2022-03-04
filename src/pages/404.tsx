import { useRouter, } from 'next/dist/client/router'

const routes = ['circuits', 'constructors', 'drivers', 'races', 'seasons'];

export default function FourOhFour() {
  const router = useRouter()
  const notFound = <h1>404 - Page Not Found</h1>;

  if (process.env.GITHUB_PAGES) {
    if (typeof window === "undefined")
      return <noscript>{notFound}</noscript>;

    if (!router.isReady)
      return <></>;

    const pathNames = window.location.pathname.split('/')

    if (pathNames.length == 4) {
      const route = pathNames[2];
      const id = pathNames[3];

      if (routes.indexOf(route) != -1) {
        router.push(`/${route}/${id}${window.location.search}`)
        return <></>;
      }
    }
  }

  return notFound;
}