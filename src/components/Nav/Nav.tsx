import React from 'react'
import styles from "./nav.module.css"
import { usePathname } from 'next/navigation'
import { Link } from '@/i18n/navigation'

import LangSwitch from '../LangSwitch/LangSwitch'
import { useTranslations } from 'next-intl'

const Nav = ({
    lo
}: {
    lo: string
}) => {
    const t = useTranslations("Header")
    const pathname = usePathname()
  return (
    <nav className={lo === "ar" ? styles.nav + " " + styles.ar : styles.nav}>
        <ul className={styles.links}>
            <li>
                <Link className={pathname === `/${lo}` ? styles.active : ""} href={'/'}>
                    {
                        t("Home")
                    }
                </Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/services` ? styles.active : ""} href={'/services'}>
                    {
                        t("Services")
                    }
                </Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/about` ? styles.active : ""} href={'/about'}>
                    {
                        t("AboutUs")
                    }
                </Link>
            </li>
            <li>
                <Link className={pathname === `/${lo}/contact` ? styles.active : ""} href={'/contact'}>
                    {
                        t("ContactUs")
                    }
                </Link>
            </li>
        </ul>
        <LangSwitch lo={lo} />
    </nav>
  )
}

export default Nav