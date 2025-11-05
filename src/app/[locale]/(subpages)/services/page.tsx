import React from 'react'
import styles from "./services.module.css"
import Services from '@/components/Services/Services'
const ServicesPage = async ({
  params
} : {
    params: Promise<{locale: string}>
}) => {
    const { locale } = await params
  return (
        <section className={styles.services}>
            <Services lo={locale} />
        </section>
  )
}

export default ServicesPage