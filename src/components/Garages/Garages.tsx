import React from 'react'
import styles from "./garages.module.css"
import { useTranslations } from 'next-intl'
import Image from 'next/image'


import garageOne from "../../../public/images/apcoa.svg"
import garageTwo from "../../../public/images/best-parking.svg"
import garageThree from "../../../public/images/parking-3.png"

const Garages = ({
    lo
} : {
    lo: string
}) => {
        const t = useTranslations("Contact")
  return (
    <div className={lo === "ar" ? styles.ar + " " + styles.garages : styles.garages}>
        <h2>
            {
                t("Garages.Heading")
            }
        </h2>
        <div className={styles.wrapper}>
            <div className={styles.garage}>
                <div className={styles.garageImg}>
                    <Image src={garageOne} alt='Apcoa Logo'></Image>
                </div>
                <h3>
                    Tiefgarage Gumpendorfer Strasse – APCOA
                </h3>
                <ul>
                    <li>
                        {
                            t("Garages.0.Ul.0")
                        }
                    </li>
                    <li>
                        {
                            t("Garages.0.Ul.1")
                        }
                    </li>
                    <li>
                        {
                            t("Garages.0.Ul.2")
                        }
                    </li>
                </ul>
                <a href="https://www.apcoa.at/parken/wien/gumpendorfer-strasse-wien-apcoa/?utm_source=chatgpt.com" target='_blank'>
                    {
                        t("Garages.ViewButton")
                    }
                </a>
            </div>
            <div className={styles.garage}>
                <div className={styles.garageImg}>
                    <Image src={garageTwo} alt='Apcoa Logo'></Image>
                </div>
                <h3>
                    Garage MAHÜ77 (Best in Parking)
                </h3>
                <ul>
                    <li>
                        {
                            t("Garages.1.Ul.0")
                        }
                    </li>
                    <li>
                        {t("Garages.1.Ul.1")} <a href="tel:+4315131241" target='_blank'>004315131241</a>
                    </li>
                </ul>
                <a href="http://bestinparking.at/garage/wien/damboeckgasse-4?utm_source=chatgpt.com" target='_blank'>
                    {
                        t("Garages.ViewButton")
                    }
                </a>
            </div>
            <div className={styles.garage}>
                <div className={styles.garageImg}>
                    <Image src={garageThree} alt='Apcoa Logo'></Image>
                </div>
                <h3>
                    Garage in der Rahlgasse GmbH
                </h3>
                <ul>
                    <li>
                        {
                            t("Garages.2.Ul.0")
                        }
                    </li>
                    <li>
                        {t("Garages.2.Ul.1")} <a href="tel:+4315872724" target='_blank'>004315872724</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Garages