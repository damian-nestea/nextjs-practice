import Head from 'next/head'
import React from 'react'

const PokemonPage = ({ pokemon }) => {
  return (
    <article className=' flex flex-col mx-auto my-8 gap-3 w-48'>
      <Head>
        <title>Pokemon: {pokemon.name}</title>
      </Head>
      <h1 className=' text-2xl font-bold first-letter:uppercase text-center'>{pokemon.name}</h1>
      <p className=' text-center'>Peso: {pokemon.height}kg.</p>
      <img className=' min-w-full' src={pokemon.sprites.back_default} />
    </article>
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