import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./services.module.css"
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import tensionHeadache from "../../../public/images/tension-headache.jpg";
import chronicFatigueSyndrome from "../../../public/images/chronic-fatigue-syndrome.jpg";
import facialNeuralgia from "../../../public/images/facial-neuralgia.jpg";
import clusterHeadache from "../../../public/images/cluster-headache.png";
import herniatedDisc from "../../../public/images/herniated-disc.png";
import sciatica from "../../../public/images/sciatica.png";
import chronicNeckPain from "../../../public/images/chronic-neck-pain.webp";
import postCovidSyndrome from "../../../public/images/post-covid-syndrome.jpg";
import chronicNeuropathicPain from "../../../public/images/chronic-neuropathic-pain.png";
import sleep from "../../../public/images/sleep.png";
import anxiety from "../../../public/images/anxiety.png";
import autonomicDisorders from "../../../public/images/autonomic-disorders.jpg";
import myastheniaGravis from "../../../public/images/myasthenia-gravis.png";
import trigeminalNeuralgia from "../../../public/images/trigeminal-neuralgia.jpg";
import diabeticPeripheralNeuropathy from "../../../public/images/diabetic-peripheral-neuropathy.jpg";
import epilepsy from "../../../public/images/epilepsy.png";
import parkinson from "../../../public/images/parkinson.jpg";
import ms from "../../../public/images/ms.jpg";
import migraine from "../../../public/images/migraine.jpg";
import stroke from "../../../public/images/stroke.jpg";

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
                {
                    t("HeadingP")
                }
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
                            <Image src={stroke} alt={t("Sections.0.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.0.Title")}</h4>
                        <p>{t("Sections.0.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={migraine} alt={t("Sections.0.Cards.1.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.1.Title")}</h4>
                        <p>{t("Sections.0.Cards.1.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={ms} alt={t("Sections.0.Cards.2.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.2.Title")}</h4>
                        <p>{t("Sections.0.Cards.2.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={parkinson} alt={t("Sections.0.Cards.3.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.3.Title")}</h4>
                        <p>{t("Sections.0.Cards.3.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={epilepsy} alt={t("Sections.0.Cards.4.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.4.Title")}</h4>
                        <p>{t("Sections.0.Cards.4.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={diabeticPeripheralNeuropathy} alt={t("Sections.0.Cards.5.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.5.Title")}</h4>
                        <p>{t("Sections.0.Cards.5.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={trigeminalNeuralgia} alt={t("Sections.0.Cards.6.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.6.Title")}</h4>
                        <p>{t("Sections.0.Cards.6.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={myastheniaGravis} alt={t("Sections.0.Cards.7.Title")} />
                        </div>
                        <h4>{t("Sections.0.Cards.7.Title")}</h4>
                        <p>{t("Sections.0.Cards.7.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={autonomicDisorders} alt={t("Sections.0.Cards.8.Title")} />
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
                            <Image src={anxiety} alt={t("Sections.1.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.1.Cards.0.Title")}</h4>
                        <p>{t("Sections.1.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={sleep} alt={t("Sections.1.Cards.1.Title")} />
                        </div>
                        <h4>{t("Sections.1.Cards.1.Title")}</h4>
                        <p>{t("Sections.1.Cards.1.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={chronicNeuropathicPain} alt={t("Sections.1.Cards.2.Title")} />
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
                            <Image src={chronicFatigueSyndrome} alt={t("Sections.2.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.2.Cards.0.Title")}</h4>
                        <p>{t("Sections.2.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={postCovidSyndrome} alt={t("Sections.2.Cards.1.Title")} />
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
                            <Image src={chronicNeckPain} alt={t("Sections.3.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.3.Cards.0.Title")}</h4>
                        <p>{t("Sections.3.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={sciatica} alt={t("Sections.3.Cards.1.Title")} />
                        </div>
                        <h4>{t("Sections.3.Cards.1.Title")}</h4>
                        <p>{t("Sections.3.Cards.1.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={herniatedDisc} alt={t("Sections.3.Cards.2.Title")} />
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
                            <Image src={tensionHeadache} alt={t("Sections.4.Cards.0.Title")} />
                        </div>
                        <h4>{t("Sections.4.Cards.0.Title")}</h4>
                        <p>{t("Sections.4.Cards.0.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={clusterHeadache} alt={t("Sections.4.Cards.1.Title")} />
                        </div>
                        <h4>{t("Sections.4.Cards.1.Title")}</h4>
                        <p>{t("Sections.4.Cards.1.p")}</p>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.cardIcon}>
                            <Image src={facialNeuralgia} alt={t("Sections.4.Cards.2.Title")} />
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