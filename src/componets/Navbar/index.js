import styles from './navbar.module.css'
import Link from "next/link"
export function Navbar() {
    return <ul className={styles.navbar}>
                <li className={styles.navbarItem}>
                    <Link href="/housing">Housing</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/food">Food</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="/legal">Legal</Link>
                </li>
                <li className={styles.navbarItem}>
                    <Link href="clothing">Clothing</Link>
                </li>
            </ul>
}