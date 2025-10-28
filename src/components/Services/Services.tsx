import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./services.module.css"
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import cardBluta from "../../../public/images/card-bluta.png";

const Services = () => {
    const t = useTranslations("HomePage.Services")
  return (
    <section className={styles.services}>
        <MainHeading>
            <h2>
                {
                    t("Heading")
                }
            </h2>
        </MainHeading>
        <div className="container">
            <p>
                As a neurologist, I work with patients who suffer from conditions affecting the brain, spinal cord, nerves, and muscles.
                Many neurological problems begin with subtle signs such as numbness, headache, or persistent fatigue.
                My approach focuses on listening carefully, identifying the underlying neurological cause, and guiding each patient toward a clear diagnosis and effective treatment plan.
            </p>
            <div className={styles.section}>
                <h2>
                    {
                        t("Sections.0.Heading")
                    }
                </h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.0.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.0.Title")}</h4>
                        <p>{t("Sections.0.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.0.Cards.1.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.1.Title")}</h4>
                        <p>{t("Sections.0.Cards.1.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.0.Cards.2.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.2.Title")}</h4>
                        <p>{t("Sections.0.Cards.2.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.0.Cards.3.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.3.Title")}</h4>
                        <p>{t("Sections.0.Cards.3.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.0.Cards.4.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.4.Title")}</h4>
                        <p>{t("Sections.0.Cards.4.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.0.Cards.5.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.5.Title")}</h4>
                        <p>{t("Sections.0.Cards.5.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.0.Cards.6.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.6.Title")}</h4>
                        <p>{t("Sections.0.Cards.6.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.0.Cards.7.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.7.Title")}</h4>
                        <p>{t("Sections.0.Cards.7.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.0.Cards.8.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.8.Title")}</h4>
                        <p>{t("Sections.0.Cards.8.p")}</p>
                    </div>

                </div>
            </div>
            <div className={styles.section}>
                <h2>
                    {
                        t("Sections.1.Heading")
                    }
                </h2>
                <div className={styles.cards}>
                        
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.1.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.1.Cards.0.Title")}</h4>
                        <p>{t("Sections.1.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.1.Cards.1.Title")} />
                        </div>
                        <h4>{t("Sections.1.Cards.1.Title")}</h4>
                        <p>{t("Sections.1.Cards.1.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.1.Cards.2.Title")} />
                        </div>
                        <h4>{t("Sections.1.Cards.2.Title")}</h4>
                        <p>{t("Sections.1.Cards.2.p")}</p>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <h2>
                    {
                        t("Sections.2.Heading")
                    }
                </h2>
                
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.2.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.2.Cards.0.Title")}</h4>
                        <p>{t("Sections.2.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.2.Cards.1.Title")} />
                        </div>
                        <h4>{t("Sections.2.Cards.1.Title")}</h4>
                        <p>{t("Sections.2.Cards.1.p")}</p>
                    </div>
                </div>

            </div>
            <div className={styles.section}>
                <h2>
                    {
                        t("Sections.3.Heading")
                    }
                </h2>
                <div className={styles.cards}>
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.3.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.3.Cards.0.Title")}</h4>
                        <p>{t("Sections.3.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.3.Cards.1.Title")} />
                        </div>
                        <h4>{t("Sections.3.Cards.1.Title")}</h4>
                        <p>{t("Sections.3.Cards.1.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.3.Cards.2.Title")} />
                        </div>
                        <h4>{t("Sections.3.Cards.2.Title")}</h4>
                        <p>{t("Sections.3.Cards.2.p")}</p>
                    </div>
                </div>
            </div>
            <div className={styles.section}>
                <h2>
                    {
                        t("Sections.4.Heading")
                    }
                </h2>
                <div className={styles.cards}>
                        
                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.4.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.4.Cards.0.Title")}</h4>
                        <p>{t("Sections.4.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.4.Cards.1.Title")} />
                        </div>
                        <h4>{t("Sections.4.Cards.1.Title")}</h4>
                        <p>{t("Sections.4.Cards.1.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={cardBluta} alt={t("Sections.4.Cards.2.Title")} />
                        </div>
                        <h4>{t("Sections.4.Cards.2.Title")}</h4>
                        <p>{t("Sections.4.Cards.2.p")}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services