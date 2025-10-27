import React from 'react'
import styles from "./logo-header.module.css"
import Image from 'next/image'
import logo from "../../../public/images/logo.png"
import { Link } from '@/i18n/navigation'


const LogoHeader = () => {
  return (
    <div className={styles.logoHeader}>
        <Link href={"/"}>
          <Image src={logo} alt='logo'></Image>
        </Link>
    </div>
  )
}

export default LogoHeader