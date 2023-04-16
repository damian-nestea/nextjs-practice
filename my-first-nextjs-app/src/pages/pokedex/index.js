import Link from 'next/link'
import React from 'react'
import Pokemon from './pokemon'

const Pokedex = ({ pokedex }) => {
  return (
    <div className=' p-10'>
        <ul className=' list-disc list-inside space-y-2'>
            Lista de Pokemons:
            {
                pokedex.map((pokemon , index)=>(
                   <Link href={`/pokedex/${index + 1}`}><Pokemon  className=' first-letter:uppercase italic' pokemon = {pokemon} key={index}></Pokemon></Link>
                ))
            }
        </ul>
    </div>
  )
}

export default Pokedex

export const getServerSideProps = async () => {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon");
    const pokemonList = await res.json();
    return {
        props: {
            pokedex: pokemonList.results
        }
    }
}