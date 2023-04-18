import Head from 'next/head'
import React from 'react'

const PokemonPage = ({ pokemon }) => {
  return (
    <div>
      <Head>
        <title>Pokemon: {pokemon.name}</title>
      </Head>
      <h1>{pokemon.name}</h1>
      <p>{pokemon.height}</p>
      <img src={pokemon.sprites.back_default} />
    </div>
  )
}

export default PokemonPage

export const getStaticPaths = async () => {
  const res = await fetch('https://pokeapi.co/api/v2/pokemon');
  const pokemonList = await res.json();

    const paths = pokemonList.results.map((pokemon,index) => ({
        params: { id: (index + 1).toString()}
    }));
    return { paths , fallback: false}
}

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const pokemon = await res.json(); 

  console.log(pokemon)
  return{
      props: {
          pokemon
      }
  }
}