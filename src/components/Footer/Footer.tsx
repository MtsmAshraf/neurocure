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
                <p>
                  Bank Austria: 
                  <span>
                    BIC: XXXXXXXXXX
                  </span>
                  {/* <br />
                  <b>
                    {t("Note")}
                  </b> */}
                </p>
              </div>
            </div>
            <div className={styles.pages}>
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