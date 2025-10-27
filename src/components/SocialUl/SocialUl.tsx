import React from 'react'
import styles from "./social-ul.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentSms, faPhone } from '@fortawesome/free-solid-svg-icons'
const SocialUl = () => {
  return (
    <ul className={styles.socialUl}>
        <li>
            <a title="Phone Call" target='_blank' href="tel:+436701960112">
                <FontAwesomeIcon icon={faPhone}/>
            </a>
        </li>
        <li>
            <a title="SMS" target='_blank' href="sms:+436701960112">
                <FontAwesomeIcon icon={faCommentSms}/>
            </a>
        </li>
    </ul>
  )
}

export default SocialUl