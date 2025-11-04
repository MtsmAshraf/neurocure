import React from 'react'
import styles from "./directions.module.css"
import { useTranslations } from 'next-intl'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBus, faTrainSubway, faTrainTram } from '@fortawesome/free-solid-svg-icons'
const Directions = ({
    lo
} : {
    lo: string
}) => {
        const t = useTranslations("Contact")
  return (
    <div className={lo === "ar" ? styles.ar + " " + styles.directions : styles.directions}>
        <h2>
            {
                t("Directions.Heading")
            }
        </h2>
        <div className={styles.wrapper}>
            <div className={styles.method}>
                <div className={styles.methodImg}>
                    <FontAwesomeIcon icon={faTrainSubway} />
                </div>
                <h3>
                    {
                        t("Directions.0.H2")
                    }
                </h3>
                <ul>
                    <li>
                        {
                            t("Directions.0.Ul.0")
                        }
                    </li>
                    <li>
                        {
                            t("Directions.0.Ul.1")
                        }
                    </li>
                </ul>
            </div>
            <div className={styles.method}>
                <div className={styles.methodImg}>
                    <FontAwesomeIcon icon={faTrainTram} />
                </div>
                <h3>
                    {
                        t("Directions.1.H2")
                    }
                </h3>
                <ul>
                    <li>
                        {
                            t("Directions.1.Ul.0")
                        }
                    </li>
                </ul>
            </div>
            <div className={styles.method}>
                <div className={styles.methodImg}>
                    <FontAwesomeIcon icon={faBus} />
                </div>
                <h3>
                    {
                        t("Directions.2.H2")
                    }
                </h3>
                <ul>
                    <li>
                        {
                            t("Directions.2.Ul.0")
                        }
                    </li>
                    <li>
                        {
                            t("Directions.2.Ul.1")
                        }
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Directions