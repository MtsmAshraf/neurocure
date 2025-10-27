import React from 'react'
import MainHeading from '../MainHeading/MainHeading'
import styles from "./about.module.css"
import Image from 'next/image'
import drImg from "../../../public/images/doctor-yacob.jpg"


const About = () => {
  return (
    <section className={styles.about}>
        <MainHeading>
            About Us
        </MainHeading>
        <div className="container">
          <div className={styles.img}>
            <Image src={drImg} alt="Dr.in Fairoz Mohammed"></Image>
          </div>
          <div className={styles.text}>
            <div className={styles.textHeading}>
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
            </div>
          </div>
        </div>
    </section>
  )
}

export default About