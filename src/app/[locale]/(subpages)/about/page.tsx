import React from 'react'
import styles from "./about.module.css"
import About from '@/components/About/About'
const AboutPage = () => {
  return (
    <section className={styles.about}>
        <About />
    </section>
  )
}

export default AboutPage