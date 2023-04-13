import React from 'react'

const CharacterCard = ({personagem}) => {
  return (
    <article className=' w-60 h-80 flex flex-col items-center  gap-2 p-2 bg-amber-900 rounded-md'>
        <h2 className=' text-xl font-bold'>{personagem.name}</h2>  
        <img className=' w-48 h-48 rounded-lg duration-700 hover:w-52 hover:h-52' src={personagem.image} alt={`Foto de ${personagem.name}`} />
        <p className=' text-center'><span className=' font-bold'>Ator/Atriz: </span>{personagem.actor}</p>
    </article>
  )
}

export default CharacterCard