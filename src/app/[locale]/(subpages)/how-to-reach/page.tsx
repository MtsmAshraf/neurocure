import Directions from '@/components/Directions/Directions'
import Garages from '@/components/Garages/Garages'
import React from 'react'
import styles from "./how-to-reach.module.css"


const HowToReach = async ({
    params
} : {
    params: Promise<{locale: string}>
}) => {
    const { locale } = await params
  return (
    <section className={locale === "ar" ? styles.ar + " " + styles.howToReach : styles.howToReach}>
        <div className="container">
            <Directions lo={locale} />
            <Garages lo={locale} />
        </div>
    </section>
  )
}

export default HowToReach