import React from 'react'
import styles from "./contact.module.css"
import MainHeading from '../MainHeading/MainHeading'
import SocialUl from '../SocialUl/SocialUl'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'

const Contact = ({
    lo
} : {
    lo: string
}) => {

    const t = useTranslations("HomePage.Contact")

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
            <div className={styles.info}>
                <div>
                    <SocialUl />
                </div>
                <div className={styles.location}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d170130.3807588384!2d16.214834562549303!3d48.22034409583409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d079e5136ca9f%3A0xfdc2e58a51a25b46!2sVienna%2C%20Austria!5e0!3m2!1sen!2seg!4v1761733194174!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={styles.address}>
                    <span>
                        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    </span>
                    <address>
                    Gumpendorferstraße 59-61/2/ 
                    Stock1- 1st Floor
                    1060 Wien, Vienna,
                    Austria
                    </address>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact