import React from 'react'
import styles from "./vertical-nav.module.css"
import SocialUl from '../SocialUl/SocialUl'
// import LangSwitch from '../Nav/LangSwitch/LangSwitch'
import { usePathname } from 'next/navigation'
// import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
const VerticalNav = ({
    shown,
    lo
} : {
    shown: boolean,
    lo: string
}) => {
    const pathname = usePathname()
    const t = useTranslations("Header")
    return (
    <div className={shown ? styles.verticalNav + " " + styles.shown : styles.verticalNav}>
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
            <li>
                <Link className={pathname === `/${lo}/how-to-reach` ? styles.active : ""} href={'/how-to-reach'}>
                    {
                        t("HowToReach")
                    }
                </Link>
            </li>
        </ul>
        <div className={styles.social}>
            <SocialUl />
        </div>
    </div>
  )
}

export default VerticalNav