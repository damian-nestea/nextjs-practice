import React from 'react'

const Pokemon = ({ pokemon }) => {
  return (
    <li>{pokemon.name} : {pokemon.url}</li>
  )
}

export default Pokemon;

export const getServerSideProps = async (context) => {
    console.log(context)
    const res = await fetch(pokemon.url);
    const pokemonList = await res.json();
    console.log(pokemonList)
    return {
        props: {
            pokedex: pokemonList.results
        }
    }
}