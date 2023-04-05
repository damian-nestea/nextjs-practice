import React, { useEffect, useState } from 'react'

const loadPokemon = async (url) => {
    let response = await fetch(url);
    let json = await  response.json();
    console.log(json);
}

const Pokemon = ({ pokemon }) => {
    console.log(pokemon)
  return (
    <li>{pokemon.name} : {pokemon.url}</li>
  )
}

export default Pokemon;
