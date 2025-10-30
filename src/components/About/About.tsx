import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./about.module.css"
import Image from 'next/image'
import drYacobImg from "../../../public/images/doctor-yacob.png"
import drRimImg from "../../../public/images/doctor-rim.png"
import { useTranslations } from 'next-intl'


const About = ({
  lo
} : {
  lo: string
}) => {
  const t = useTranslations("AboutUs")
  const classNames = [
    styles.about,
    lo === "ar" ? styles.ar : null
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
          <div className={styles.person}>
            <div className={styles.textHeading}>
              <div className={styles.img}>
                <Image src={drYacobImg} alt="Dr. Muhammad Yacob"></Image>
              </div>
              <h2>
                {
                  t("0.Name")
                }
              </h2>
              <span>
                {
                  t("0.Title")
                }
              </span>
              <p>
                {
                  t("0.Description")
                }
              </p>
            </div>
            <div className={styles.textInfo}>
              <div>
                <h3>
                  {
                    t("0.Qualifications.Experience.Heading")
                  }
                </h3>
                
                <ul>
                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.0.Title")}</span>
                        <p>{t("0.Qualifications.Experience.0.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.0.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.1.Title")}</span>
                        <p>{t("0.Qualifications.Experience.1.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.1.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.2.Title")}</span>
                        <p>{t("0.Qualifications.Experience.2.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.2.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.3.Title")}</span>
                        <p>{t("0.Qualifications.Experience.3.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.3.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.4.Title")}</span>
                        <p>{t("0.Qualifications.Experience.4.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.4.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.5.Title")}</span>
                        <p>{t("0.Qualifications.Experience.5.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.5.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.6.Title")}</span>
                        <p>{t("0.Qualifications.Experience.6.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.6.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.7.Title")}</span>
                        <p>{t("0.Qualifications.Experience.7.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.7.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.8.Title")}</span>
                        <p>{t("0.Qualifications.Experience.8.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.8.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.9.Title")}</span>
                        <p>{t("0.Qualifications.Experience.9.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.9.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.10.Title")}</span>
                        <p>{t("0.Qualifications.Experience.10.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.10.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("0.Qualifications.Experience.11.Title")}</span>
                        <p>{t("0.Qualifications.Experience.11.Details")}</p>
                      </div>
                      <span>{t("0.Qualifications.Experience.11.Date")}</span>
                    </div>
                  </li>

                </ul>
              </div>
              <div>
                <div>
                  <h3>
                    {
                      t("0.Qualifications.Education.Heading")
                    }
                  </h3>
                  <ul>
                    <li>
                      <div>
                        <div>
                          <span>
                            {
                              t("0.Qualifications.Education.0.Title")
                            }
                          </span>
                          <p>
                            {
                              t("0.Qualifications.Education.0.Details")
                            }
                          </p>
                        </div>
                        <span>
                              {
                                t("0.Qualifications.Education.0.Date")
                              }
                        </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>
                          <span>
                            {
                              t("0.Qualifications.Education.1.Title")
                            }
                          </span>
                          <p>
                            {
                              t("0.Qualifications.Education.1.Details")
                            }
                          </p>
                        </div>
                        <span>
                              {
                                t("0.Qualifications.Education.1.Date")
                              }
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3>
                    {
                      t("0.Qualifications.Certifications.Heading")
                    }
                  </h3>
                  <ul>
                    <li>
                      <div>
                        <div>
                          <span>
                            {
                              t("0.Qualifications.Certifications.0.Title")
                            }
                          </span>
                          <p>
                            {
                              t("0.Qualifications.Certifications.0.Details")
                            }
                          </p>
                        </div>
                      <span>
                        {
                          t("0.Qualifications.Certifications.0.Date")
                        }
                      </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>
                          <span>
                            {
                              t("0.Qualifications.Certifications.1.Title")
                            }
                          </span>
                          <p>
                            {
                              t("0.Qualifications.Certifications.1.Details")
                            }
                          </p>
                        </div>
                      <span>
                        {
                          t("0.Qualifications.Certifications.1.Date")
                        }
                      </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>
                          <span>
                            {
                              t("0.Qualifications.Certifications.2.Title")
                            }
                          </span>
                          <p>
                            {
                              t("0.Qualifications.Certifications.2.Details")
                            }
                          </p>
                        </div>
                      <span>
                        {
                          t("0.Qualifications.Certifications.2.Date")
                        }
                      </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>
                          <span>
                            {
                              t("0.Qualifications.Certifications.3.Title")
                            }
                          </span>
                          <p>
                            {
                              t("0.Qualifications.Certifications.3.Details")
                            }
                          </p>
                        </div>
                      <span>
                        {
                          t("0.Qualifications.Certifications.3.Date")
                        }
                      </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.person}>
            <div className={styles.textHeading}>
              <div className={styles.img}>
                <Image src={drRimImg} alt="Rim Al-Dahhan"></Image>
              </div>
              <h2>
                Rim Al-Dahhan
              </h2>
              <span>
                Ordinationsassistentin
              </span>
            </div>
            <div className={styles.textInfo}>
              <div>
                <h3>Experience</h3>
                <ul>
                  <li>
                    <div>
                      <div>
                        <span>
                          Ordinationsmanagerin
                        </span>
                        <p>
                          Praxis von Dr. med. Talal Almaini Mejwal, 1150 Wien 
                        </p>
                      </div>
                    <span>
                      06/2022 – 07/2025
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Ordinationsassistentin
                        </span>
                        <p>
                          Praxis von Dr. med. Gihan Ibrahim, 1020 Wien
                        </p>
                      </div>
                    <span>
                      06/2021 – 05/2022
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Ordinationsassistentin
                        </span>
                        <p>
                          Praxis von Dr. Rula Al Harbi, 1030 Wien
                        </p>
                      </div>
                    <span>
                      12/2017 – 12/2019 
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Aktive Arbeitssuche und Weiterbildung 
                        </span>
                      </div>
                    <span>
                      12/2014 – 08/2016
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Kindergruppenbetreuerin
                        </span>
                        <p>
                          Kindergruppe „Iman“, 1200 Wien 
                        </p>
                      </div>
                    <span>
                      06/2005 – 11/2014 
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Ausbildung zur Ordinationsassistentin  
                        </span>
                        <p>
                          Schulungszentrum Dr. Kienbacher, 1140 Wien 
                        </p>
                      </div>
                    <span>
                      09/2016 – 05/2017
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Institut für Kindergarten - und Hortpädagogik Ausbildung zur Kindergruppenbetreuerin
                        </span>
                        <p>
                          Volkshochschule (VHS) Brigittenau, 1200 Wien 
                        </p>
                      </div>
                    <span>
                      10/2004 – 05/2005
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Studium: englische Literatur 
                        </span>
                        <p>
                          Universität, Damaskus, Syrien 
                        </p>
                      </div>
                    <span>
                      07/1990 – 07/1994
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Maturalehrgang
                        </span>
                        <p>
                          Damaskus, Syrien 
                        </p>
                      </div>
                    <span>
                      09/1989 – 06/1990
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Gymnasium
                        </span>
                        <p>
                          Damaskus, Syrien
                        </p>
                      </div>
                    <span>
                      09/1983 – 06/1989
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Grundschule
                        </span>
                        <p>
                          Damaskus, Syrien
                        </p>
                      </div>
                    <span>
                        09/1979 – 06/1983
                    </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  <h3>Weiterbildungen / Praktika</h3>
                  <ul>
                    <li>
                      <div>
                        <div>
                          <span>
                            Deutschkurs Niveau B2
                          </span>
                          <p>
                            ZIB Training GmbH, 1220 Wien Bildungsinstitut  
                          </p>
                        </div>
                      <span>
                        08/2020 – 11/2020 
                      </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>
                          <span>
                            Deutschkurs Niveau B1
                          </span>
                          <p>
                            the update training GmbH, 1210 Wien Bildungsinstitut 
                          </p>
                        </div>
                      <span>
                        12/2015 – 02/2016 
                      </span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3>Qualifikationen</h3>
                  <ul>
                    <li>
                      <div>
                        <div>
                          <span>
                            Sprachen
                          </span>
                          <p>
                            Arabisch: Exzellente Kenntnisse, <br />
                            Deutsch: Gute Kenntnisse, <br />
                            Englisch: Durchschnittliche Kenntnisse 
                          </p>
                        </div>
                      <span>
                        Issued Feb 2025 · Expires Feb 2030
                      </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>
                          <span>
                            EDV
                          </span>
                          <p>
                            Grundlegende MS Office Anwendungskenntnisse, gute Kenntnisse GanyMED
                          </p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  )
}

export default About