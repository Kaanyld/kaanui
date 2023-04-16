import React from 'react'
import styles from './styles.module.css'

export const KaanButton = ({ type, text }) => {
  return <button className={`${styles.btn} ${styles[type]}`}>{text}</button>
}
