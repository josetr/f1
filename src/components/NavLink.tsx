import Link from "next/link";
import { useRouter } from "next/router";

export default function NavLink({ activeClassName, href, children }: { activeClassName: string, href: string, children: string }) {
  const router = useRouter();
  const active = router.pathname == href || router.pathname.startsWith(href + "/") ? activeClassName : "";
  return <Link href={href}><a className={active}>{children}</a></Link>
}
