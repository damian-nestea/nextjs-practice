import React from 'react'
import Title from '../../../components/Title'
import Button from '../../../components/Button'
import styles from '../../styles/harryPotterStaff.module.css'
import Head from 'next/head'

const HarryPotterStaff = () => {
  return (
    <div className={styles.body}>
      <Head>    
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
            
        <title>Harry Potter Staff</title>
        <meta name="title" content="Harry Potter Staff" />
        <meta name="description" content="Lista de personagens do filme Harry Potter." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/harryPotterStaff" />
        <meta property="og:title" content="Harry Potter Staff" />
        <meta property="og:description" content="Lista de personagens do filme Harry Potter." />
        <meta property="og:image" content="http://localhost:3000/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:3000/harryPotterStaff" />
        <meta property="twitter:title" content="Harry Potter Staff" />
        <meta property="twitter:description" content="Lista de personagens do filme Harry Potter." />
        <meta property="twitter:image" content="http://localhost:3000/logo.png"></meta>
      </Head>
      <div  className={styles.botaoVoltar} >
        <Button nomeBotao = {"Voltar"} destino={"../"}  />
      </div>
      <Title titulo={"Staff do Harry Potter"} />
    </div>
  )
}

export default HarryPotterStaff