import Link from "next/link"
import ThemeSwitch from "./ThemeSwitch"

export default function List() {
  return (
    <ul>
    <li>
    <Link href={'/'}>Home</Link>
    </li>
    <li>
    <Link href={'/about'}>About</Link>
    </li>
    <li>
    <Link href={'/contact'}>Contact</Link>
    </li>
    <ThemeSwitch />
</ul>
  )
}
