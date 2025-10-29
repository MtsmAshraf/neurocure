import React from 'react'
import styles from "./datenschutz.module.css"
import MainHeading from '@/components/MainHeading/MainHeading'
import { getTranslations } from 'next-intl/server'

const Datenschutz = async ({
    params
} : {
    params: Promise<{ locale: string }>
}) => {
    const { locale } = await params
    const t = await getTranslations("Datenschutz")
  return (
    <>
        <section className={styles.datenschutz}>
            <MainHeading>
                <h2>
                    {t("Heading")}
                </h2>
            </MainHeading>
            <div className="container">
                {
                    locale === "en" ? 
                    <>
                        <h1>Policy</h1>
                    </> : 
                    locale === "de" ?
                    <>
                        <h1>
                            Datenschutz
                        </h1>
                    </>
                    :
                    <>
                        <h1>
                            سياساتنا
                        </h1>
                    </>
                }
            </div>
        </section>
    </>
  )
}

export default Datenschutz