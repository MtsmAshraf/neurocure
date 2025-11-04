import React from 'react'
import styles from "./footer.module.css"
import { Link } from '@/i18n/navigation'
import { useTranslations } from 'next-intl'
const Footer = ({
  lo
} : {
  lo: string
}) => {
  const t = useTranslations("Footer")
  return (
    
    <footer className={lo === "ar" ? styles.footer + " " + styles.ar : styles.footer}>
        <div className={styles.overlay}></div>
        <div className="container">
            <div className={styles.footerSocialLinks}>
              <h4>
                {
                  t("Info")
                }
              </h4>
              <div>
                <address>
                  Dr.med.univ. Muhammed Yacob
                </address>
                <p>
                  {t("Phone")}: 
                    <a href="tel:+43670 " target='_blank'>
                      +43 670 
                    </a>
                </p>
                <a href="https://www.NeuroCure.at">
                  www.NeuroCure.at    
                </a>
              </div>
            </div>
            <div className={styles.pages}>
              <h4>
                {
                  t("Pages")
                }
              </h4>
              <div>
                <Link href={"/"}>
                  {t("Home")}
                </Link>
              </div>
              <div>
                <Link href={"/services"}>
                  {t("Services")}
                </Link>
              </div>
              <div>
                <Link href={"/about"}>
                  {t("AboutUs")}
                </Link>
              </div>
              <div>
                <Link href={"/contact"}>
                  {t("ContactUs")}
                </Link>
              </div>
              <div>
                <Link href={"/how-to-reach"}>
                  {t("HowToReach")}
                </Link>
              </div>
              <div>
                <Link href={"/datenschutz"}>
                  {t("Datenschutz")}
                </Link>
              </div>
            </div>
        </div>
        <div className={styles.copyright}>
            by: &copy; <a href="https://moatasimashraf.com/" target='_blank'>
                Moatasim
            </a>  2025
        </div>
    </footer>
  )
}

export default Footer