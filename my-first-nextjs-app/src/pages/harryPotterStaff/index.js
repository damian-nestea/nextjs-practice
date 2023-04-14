import React from 'react'
import Title from '../../../components/Title'
import Button from '../../../components/Button'
import styles from '../../styles/harryPotterStaff.module.css'

const HarryPotterStaff = () => {
  return (
    <div className={styles.body}>
      <div  className={styles.botaoVoltar} >
        <Button nomeBotao = {"Voltar"} destino={"../"}  />
      </div>
      <Title titulo={"Staff do Harry Potter"} />


    </div>
  )
}

export default HarryPotterStaff