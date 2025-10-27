import React from 'react'
import styles from "./subpages-layout.module.css"
const SubPagesLayout = ({
    children
} : {
    children: React.ReactNode
}) => {
  return (
    <section className={styles.subPagesLayout}>
        {children}
    </section>
  )
}

export default SubPagesLayout