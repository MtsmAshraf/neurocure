/* First make sure that you have installed the package */

/* If you are using yarn */
// yarn add @calcom/embed-react

/* If you are using npm */
// npm install @calcom/embed-react
  
"use client"
import styles from "./book-btn.module.css"
import { getCalApi } from "@calcom/embed-react";
import { useTranslations } from "next-intl";
import { useEffect } from "react";
export default function BookBtn({
  lo
} : {
  lo: string
}) {
  const t = useTranslations("BookBtn")
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"book-appointment"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <button className={lo === "ar" ? styles.ar + " " + styles.bookBtn : styles.bookBtn} data-cal-namespace="book-appointment"
    data-cal-link="neurocure/book-appointment"
    
    data-cal-config='{"layout":"month_view"}'
  >{t("Text")}</button>;
};
  