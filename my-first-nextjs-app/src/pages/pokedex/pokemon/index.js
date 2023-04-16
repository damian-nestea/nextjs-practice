import React, { useEffect, useState } from 'react'

const Pokemon = ({ pokemon }) => {
    /* console.log(pokemon) */
  return (
    <li>{pokemon.name} : {pokemon.url}</li>
  )
}

export default Pokemon;
