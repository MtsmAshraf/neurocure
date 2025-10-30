import React, { use } from 'react'
import styles from "./about.module.css"
import About from '@/components/About/About'
const AboutPage = ({
    params
} : {
    params: Promise<{ locale: string }>
}) => {
    const { locale } = use(params)
  return (
    <section className={styles.about}>
        <About lo={locale} />
    </section>
  )
}

export default AboutPage