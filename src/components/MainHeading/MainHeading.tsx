import React from 'react'
import styles from "./main-heading.module.css"
const MainHeading = ({
    children,
    inverted
} : {
    children: React.ReactNode,
    inverted? : boolean
}) => {
  return (
    <div id='main-heading' className={inverted ? styles.mainHeading + " " + styles.inverted : styles.mainHeading}>
      {children}
    </div>
  )
}

export default MainHeading