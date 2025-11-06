"use client"
import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./services.module.css"
import { useTranslations } from 'next-intl'
import Image from 'next/image'

import tensionHeadache from "../../../public/images/tension-headache.png";
import chronicFatigueSyndrome from "../../../public/images/chronic-fatigue-syndrome.jpg";
import facialNeuralgia from "../../../public/images/facial-neuralgia.png";
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
import trigeminalNeuralgia from "../../../public/images/trigeminal-neuralgia.png";
import diabeticPeripheralNeuropathy from "../../../public/images/diabetic-peripheral-neuropathy.jpg";
import epilepsy from "../../../public/images/epilepsy.png";
import parkinson from "../../../public/images/parkinson.png";
import ms from "../../../public/images/ms.jpg";
import migraine from "../../../public/images/migraine.png";
import stroke from "../../../public/images/stroke.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons'

const Services = ({
    lo
} : {
    lo: string
}) => {
    const t = useTranslations("HomePage.Services")
  return (
    <section className={lo === "ar" ? styles.ar + " " + styles.services : styles.services}>
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
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.0.Cards.0.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.0.Cards.0.Title")}:
                            </span>
                            <span>
                                - {t("Sections.0.Cards.0.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={stroke} alt={t("Sections.0.Cards.0.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.0.Cards.1.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.0.Cards.1.Title")}:
                            </span>
                            <span>
                                - {t("Sections.0.Cards.1.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={migraine} alt={t("Sections.0.Cards.1.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.0.Cards.2.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.0.Cards.2.Title")}:
                            </span>
                            <span>
                                - {t("Sections.0.Cards.2.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={ms} alt={t("Sections.0.Cards.2.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.0.Cards.3.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.0.Cards.3.Title")}:
                            </span>
                            <span>
                                - {t("Sections.0.Cards.3.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={parkinson} alt={t("Sections.0.Cards.3.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.0.Cards.4.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.0.Cards.4.Title")}:
                            </span>
                            <span>
                                - {t("Sections.0.Cards.4.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={epilepsy} alt={t("Sections.0.Cards.4.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.0.Cards.5.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.0.Cards.5.Title")}:
                            </span>
                            <span>
                                - {t("Sections.0.Cards.5.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={diabeticPeripheralNeuropathy} alt={t("Sections.0.Cards.5.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.0.Cards.6.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.0.Cards.6.Title")}:
                            </span>
                            <span>
                                - {t("Sections.0.Cards.6.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={trigeminalNeuralgia} alt={t("Sections.0.Cards.6.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.0.Cards.7.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.0.Cards.7.Title")}:
                            </span>
                            <span>
                                - {t("Sections.0.Cards.7.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={myastheniaGravis} alt={t("Sections.0.Cards.7.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.0.Cards.8.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.0.Cards.8.Title")}:
                            </span>
                            <span>
                                - {t("Sections.0.Cards.8.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={autonomicDisorders} alt={t("Sections.0.Cards.8.Title")} />
                        </div>
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
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.1.Cards.0.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.1.Cards.0.Title")}:
                            </span>
                            <span>
                                - {t("Sections.1.Cards.0.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={anxiety} alt={t("Sections.1.Cards.0.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.1.Cards.1.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.1.Cards.1.Title")}:
                            </span>
                            <span>
                                - {t("Sections.1.Cards.1.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={sleep} alt={t("Sections.1.Cards.1.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.1.Cards.2.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.1.Cards.2.Title")}:
                            </span>
                            <span>
                                - {t("Sections.1.Cards.2.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={chronicNeuropathicPain} alt={t("Sections.1.Cards.2.Title")} />
                        </div>
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
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.2.Cards.0.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.2.Cards.0.Title")}:
                            </span>
                            <span>
                                - {t("Sections.2.Cards.0.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={chronicFatigueSyndrome} alt={t("Sections.2.Cards.0.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.2.Cards.1.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.2.Cards.1.Title")}:
                            </span>
                            <span>
                                - {t("Sections.2.Cards.1.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={postCovidSyndrome} alt={t("Sections.2.Cards.1.Title")} />
                        </div>
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
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.3.Cards.0.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.3.Cards.0.Title")}:
                            </span>
                            <span>
                                - {t("Sections.3.Cards.0.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={chronicNeckPain} alt={t("Sections.3.Cards.0.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.3.Cards.1.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.3.Cards.1.Title")}:
                            </span>
                            <span>
                                - {t("Sections.3.Cards.1.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={sciatica} alt={t("Sections.3.Cards.1.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.3.Cards.2.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.3.Cards.2.Title")}:
                            </span>
                            <span>
                                - {t("Sections.3.Cards.2.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={herniatedDisc} alt={t("Sections.3.Cards.2.Title")} />
                        </div>
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
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.4.Cards.0.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.4.Cards.0.Title")}:
                            </span>
                            <span>
                                - {t("Sections.4.Cards.0.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={tensionHeadache} alt={t("Sections.4.Cards.0.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.4.Cards.1.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.4.Cards.1.Title")}:
                            </span>
                            <span>
                                - {t("Sections.4.Cards.1.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={clusterHeadache} alt={t("Sections.4.Cards.1.Title")} />
                        </div>
                    </div>

                    <div className={styles.card}>
                        <div className={styles.overlay}></div>
                        <button onClick={(e: HTMLElement | any) => {e.target.classList.toggle(styles.clicked)}}>
                            <span>
                                {t("Sections.4.Cards.2.Title")}
                            </span>
                            <FontAwesomeIcon icon={faChevronCircleDown}/>
                        </button>
                        <p>
                            <span>
                                {t("Sections.4.Cards.2.Title")}:
                            </span>
                            <span>
                                - {t("Sections.4.Cards.2.p")}
                            </span>
                            </p>
                        <div className={styles.cardIcon}>
                            <Image src={facialNeuralgia} alt={t("Sections.4.Cards.2.Title")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services