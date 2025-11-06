import React from 'react'
import styles from "./contact.module.css"
import MainHeading from '../MainHeading/MainHeading'
import SocialUl from '../SocialUl/SocialUl'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock, faLocationPin } from '@fortawesome/free-solid-svg-icons'
import doctorImg from "../../../public/images/doctor-yacob.png"
import { Link } from '@/i18n/navigation'
import Image from 'next/image'

const Contact = ({
    lo
} : {
    lo: string
}) => {

    const t = useTranslations("Contact")

    const classNames = [
        lo === "ar" ? styles.ar : null,
        styles.contact
    ] 

  return (
    <section className={classNames.join(" ")}>
        <MainHeading>
            <h2>
                {
                    t("Heading")
                }
            </h2>
        </MainHeading>
        <div className="container">
            <div className={styles.img}>
                <Image src={doctorImg} alt='Dr. Muhammed Yacob Image'></Image>
                <h3>
                    {
                        t("Doctor.Name")
                    }
                </h3>
            </div>
            <div className={styles.bookLinks}>
                <Link href="/">
                    {
                        t("BookLinks.Book")
                    }</Link>
                <Link href="/">
                    {
                        t("BookLinks.Private")
                    }</Link>
            </div>
            <div className={styles.info}>
                <div className={styles.hours}>
                    <span>
                        <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                    </span>
                    <div className={styles.details}>
                        <div>
                            <h4>
                                {
                                    t("Hours.0.Day")
                                }
                            </h4>
                            <span>
                                {t("Hours.0.From")} 1:00 {t("Hours.0.PM")} {t("Hours.0.To")} 6:00 {t("Hours.0.PM")}
                            </span>
                        </div>
                        <div>
                            <h4>
                                {
                                    t("Hours.1.Day")
                                }
                            </h4>
                            <span>
                                {t("Hours.1.From")} 10:00 {t("Hours.1.AM")} {t("Hours.1.To")} 3:00 {t("Hours.1.PM")}
                            </span>
                        </div>
                    </div>
                </div>
                <a href='https://maps.app.goo.gl/8RWDpYtJYbeuGt69A' target='_blank' className={styles.address}>
                    <span>
                        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    </span>
                    <address>
                        {/* {
                            t("Address")
                        } */}
                        Gumpendorferstraße 59-61/2/ Stock1- 1st Floor 1060, Vienna, Austria
                    </address>
                </a>
            </div>
            <div className={styles.moreLinks}>
                <Link href={"/how-to-reach"} >
                    {
                        t("MoreLinks.HowToReach")
                    }
                </Link>
                <Link href={"/datenschutz"} >
                    {
                        t("MoreLinks.Policies")
                    }
                </Link>
            </div>
            <div className={styles.socials}>
                <SocialUl />
            </div>
        </div>
    </section>
  )
}

export default Contact