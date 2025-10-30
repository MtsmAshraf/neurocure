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
                {
                  t("1.Name")
                }
              </h2>
              <span>
                {
                  t("1.Title")
                }
              </span>
            </div>
            <div className={styles.textInfo}>
              <div>
                <h3>
                  {
                    t("1.Qualifications.Experience.Heading")
                  }
                </h3>
                <ul>
                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.0.Title")}</span>
                        <p>{t("1.Qualifications.Experience.0.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.0.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.1.Title")}</span>
                        <p>{t("1.Qualifications.Experience.1.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.1.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.2.Title")}</span>
                        <p>{t("1.Qualifications.Experience.2.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.2.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.3.Title")}</span>
                      </div>
                      <span>{t("1.Qualifications.Experience.3.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.4.Title")}</span>
                        <p>{t("1.Qualifications.Experience.4.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.4.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.5.Title")}</span>
                        <p>{t("1.Qualifications.Experience.5.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.5.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.6.Title")}</span>
                        <p>{t("1.Qualifications.Experience.6.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.6.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.7.Title")}</span>
                        <p>{t("1.Qualifications.Experience.7.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.7.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.8.Title")}</span>
                        <p>{t("1.Qualifications.Experience.8.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.8.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.9.Title")}</span>
                        <p>{t("1.Qualifications.Experience.9.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.9.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Experience.10.Title")}</span>
                        <p>{t("1.Qualifications.Experience.10.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Experience.10.Date")}</span>
                    </div>
                  </li>

                </ul>
              </div>
              <div>
                <div>
                  <h3>
                    {
                      t("1.Qualifications.Education.Heading")
                    }
                  </h3>
                  <ul>
                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Education.0.Title")}</span>
                        <p>{t("1.Qualifications.Education.0.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Education.0.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Education.1.Title")}</span>
                        <p>{t("1.Qualifications.Education.1.Details")}</p>
                      </div>
                      <span>{t("1.Qualifications.Education.1.Date")}</span>
                    </div>
                  </li>

                  </ul>
                </div>
                
                <div>
                  <h3>
                    {
                      t("1.Qualifications.Certifications.Heading")
                    }
                  </h3>
                  <ul>
                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Certifications.0.Title")}</span>
                        <p>
                          {t("1.Qualifications.Certifications.0.Details.0")} <br />
                          {t("1.Qualifications.Certifications.0.Details.1")} <br />
                          {t("1.Qualifications.Certifications.0.Details.2")}
                        </p>
                      </div>
                      <span>{t("1.Qualifications.Certifications.0.Date")}</span>
                    </div>
                  </li>

                  <li>
                    <div>
                      <div>
                        <span>{t("1.Qualifications.Certifications.1.Title")}</span>
                        <p>{t("1.Qualifications.Certifications.1.Details")}</p>
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