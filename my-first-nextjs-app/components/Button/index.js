import React from 'react'
import styles from './Button.module.css'
import Link from 'next/link'

const Button = ({ nomeBotao , destino }) => {
  return (
    <Link className={styles.button} href={destino}>{nomeBotao}</Link>
  )
}

export default Button