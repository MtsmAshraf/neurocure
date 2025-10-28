import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./about.module.css"
import Image from 'next/image'
import drYacobImg from "../../../public/images/doctor-yacob.png"
import drRimImg from "../../../public/images/doctor-rim.png"


const About = () => {
  return (
    <section className={styles.about}>
        <MainHeading>
          <h2>
            About Us
          </h2>
        </MainHeading>
        <div className="container">
          <div className={styles.person}>
            <div className={styles.textHeading}>
              <div className={styles.img}>
                <Image src={drYacobImg} alt="Dr. Muhammad Yacob"></Image>
              </div>
              <h2>
                Dr. Muhammad Yacob
              </h2>
              <span>
                Neurology Consultant
              </span>
              <p>
              with ten years of experience in Europe and middle East .
              Currently working as neurologist and post Covid specialist at Evangelic hospital in Vienna, Austria, and running a privat clinic. In addition to 15 months of experience as a scientific researcher in polypharmacy .
              Multi-lingual fluency in Arabic, English, and German.              </p>
            </div>
            <div className={styles.textInfo}>
              <div>
                <h3>Experience</h3>
                <ul>
                  <li>
                    <div>
                      <div>
                        <span>
                          Neuroscience Specialist
                        </span>
                        <p>
                          Unfallkrankenhaus Meidling · Part-time
                        </p>
                      </div>
                    <span>
                      Sep 2023 - Present
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Private Cliinc for Neurology
                        </span>
                        <p>
                          Unfallkrankenhaus Meidling · Part-time
                        </p>
                      </div>
                    <span>
                      Nov 2021 - Present
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Neurologist, Facharzt für Neurologie
                        </span>
                        <p>
                          Austaria
                        </p>
                      </div>
                    <span>
                      Jun 2020 - Present
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Neurologist, Facharzt für Neurologie
                        </span>
                        <p>
                          Evangelisches Krankenhaus in Wien · Full-time
                        </p>
                      </div>
                    <span>
                      Nov 2020 - Sep 2023
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Asistantarzt
                        </span>
                        <p>
                          National Hospital of Villach Landeskrankenhaus Villach
                        </p>
                      </div>
                    <span>
                      Mar 2019 - Oct 2020
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Neurologist, Internship
                        </span>
                        <p>
                          Landeskrankenhaus Villach, National Hospital of Villach
                        </p>
                      </div>
                    <span>
                      Dec 2018 - Jan 2019
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Researcher
                        </span>
                        <p>
                          Landeskrankenhaus Villach - Villach national Hospital
                        </p>
                      </div>
                    <span>
                      Aug 2016 - Dec 2018
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Neurologist, Internship
                        </span>
                        <p>
                          villach National Hospital, Austria
                        </p>
                      </div>
                    <span>
                      Jan 2016 - May 2016
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Neurologist
                        </span>
                        <p>
                          Al Mahayni hospital
                        </p>
                      </div>
                    <span>
                      Jul 2012 - Oct 2013
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Neurologist
                        </span>
                        <p>
                          Mujtahed hospital Damascus
                        </p>
                      </div>
                    <span>
                      May 2012 - Feb 2013
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Neurology
                        </span>
                        <p>
                          Fayez Halawe Hospital
                        </p>
                      </div>
                    <span>
                      Jun 2012 - Dec 2012
                    </span>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <span>
                          Neurologist
                        </span>
                        <p>
                          Private Clinic in Damascus
                        </p>
                      </div>
                    <span>
                      Dec 2010 - Mar 2012
                    </span>
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <div>
                  <h3>Education</h3>
                  <ul>
                    <li>
                      <div>
                        <div>
                          <span>
                            Neuroscience Specialist
                          </span>
                          <p>
                            Unfallkrankenhaus Meidling · Part-time
                          </p>
                        </div>
                      <span>
                        Sep 2023 - Present
                      </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>
                          <span>
                            Private Cliinc for Neurology
                          </span>
                          <p>
                            Unfallkrankenhaus Meidling · Part-time
                          </p>
                        </div>
                      <span>
                        Nov 2021 - Present
                      </span>
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3>Licenses & Certifications</h3>
                  <ul>
                    <li>
                      <div>
                        <div>
                          <span>
                            Fortbildungsdiplom DFP, Continuing Medical Education (CME)
                          </span>
                          <p>
                            Österreichische Ärztekammer
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
                            Nostrifikation (Human Medizin)
                          </span>
                          <p>
                            Medical University of Vienna
                          </p>
                        </div>
                      <span>
                        Issued Jul 2018
                      </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>
                          <span>
                            Specialty in Neurology- Master
                          </span>
                          <p>
                            United Latino Students Association
                          </p>
                        </div>
                      <span>
                        Issued May 2012
                      </span>
                      </div>
                    </li>
                    <li>
                      <div>
                        <div>
                          <span>
                            M.D
                          </span>
                          <p>
                            University of Aleppo
                          </p>
                        </div>
                      <span>
                        Issued Aug 2007
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