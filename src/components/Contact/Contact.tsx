import React from 'react'
import styles from "./contact.module.css"
import MainHeading from '../MainHeading/MainHeading'
import SocialUl from '../SocialUl/SocialUl'
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'

import garageOne from "../../../public/images/apcoa.svg"
import garageTwo from "../../../public/images/best-parking.svg"
import garageThree from "../../../public/images/parking-3.png"

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
            <div className={styles.info}>
                <div>
                    <SocialUl />
                </div>
                <div className={styles.location}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.4693648411217!2d16.354313599999998!3d48.197574599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d078f2ac983c3%3A0x8633da6e859b51f9!2sGumpendorfer%20Str.%2059-61%2F2%2C%201060%20Wien%2C%20Austria!5e0!3m2!1sen!2seg!4v1762085964859!5m2!1sen!2seg" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className={styles.address}>
                    <span>
                        <FontAwesomeIcon icon={faLocationPin}></FontAwesomeIcon>
                    </span>
                    <address>
                        {
                            t("Address")
                        }
                    </address>
                </div>
            </div>
            <div className={styles.garages}>
                <h2>
                    Three garage/parking options near the clinic address
                </h2>
                <div className={styles.wrapper}>
                    <a 
                        href='https://www.apcoa.at/parken/wien/gumpendorfer-strasse-wien-apcoa/?utm_source=chatgpt.com' 
                        target='_blank' 
                        className={styles.garage}
                    >
                        <div className={styles.garageImg}>
                            <Image src={garageOne} alt='Apcoa Logo'></Image>
                        </div>
                        <h3>
                            Tiefgarage Gumpendorfer Strasse – APCOA
                        </h3>
                        <ul>
                            <li>
                                Address: Gumpendorfer Str. 89، 1060, Vienna. 
                            </li>
                            <li>
                                Open 24 hr
                            </li>
                            <li>
                                Entry level: 2.3m approx.
                            </li>
                        </ul>
                    </a>
                    <a 
                        href='http://bestinparking.at/garage/wien/damboeckgasse-4?utm_source=chatgpt.com' 
                        target='_blank' 
                        className={styles.garage}
                    >
                        <div className={styles.garageImg}>
                            <Image src={garageTwo} alt='Apcoa Logo'></Image>
                        </div>
                        <h3>
                            Garage MAHÜ77 (Best in Parking)
                        </h3>
                        <ul>
                            <li>
                                Address: Damböckgasse 4, 1060 Wien, Austria
                            </li>
                            <li>
                                Phone: <a href="tel:+4315131241">+4315131241</a>
                            </li>
                        </ul>
                    </a>
                    <a 
                        href='https://www.apcoa.at/parken/wien/gumpendorfer-strasse-wien-apcoa/?utm_source=chatgpt.com' 
                        target='_blank' 
                        className={styles.garage}
                    >
                        <div className={styles.garageImg}>
                            <Image src={garageThree} alt='Apcoa Logo'></Image>
                        </div>
                        <h3>
                            Garage in der Rahlgasse GmbH
                        </h3>
                        <ul>
                            <li>
                                Address: Gumpendorfer Str. 6, 1060 Wien, Austria
                            </li>
                            <li>
                                Phone: <a href="tel:+4315872724">+4315872724</a>
                            </li>
                        </ul>
                    </a>
                </div>
            </div>
            <div className={styles.directions}>
            </div>
        </div>
    </section>
  )
}

export default Contact