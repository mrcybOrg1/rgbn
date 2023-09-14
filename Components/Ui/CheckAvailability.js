import React from 'react'
import styles from '../../app/Style/CheckAvailability.module.css'

const CheckAvailability = () => {
  return (
    <>
    <div className="col-xl-6 px-0 mt-4 mt-xl-0 align-self-center">
	<div className="row justify-content-center"></div>
    <div className={`${styles.col10}, ${styles.colxl8}, ${styles.textcenter}`}>
    <a className={`${styles.mt5}, ${styles.btn}, ${styles.btnprimary}`}>check availability</a>
    </div>
    </div>
    </>
  )
}

export default CheckAvailability