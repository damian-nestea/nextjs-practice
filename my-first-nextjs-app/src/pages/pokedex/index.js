import Link from "next/link";
import React from "react";
import Pokemon from "./pokemon";
import Head from "next/head";

const Pokedex = ({ pokedex }) => {
  return (
    <div className=" p-10">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <title>Pokedex</title>
        <meta name="title" content="Pokedex" />
        <meta
          name="description"
          content="Lista de pokemon com seu respectivo link."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:3000/pokedex" />
        <meta property="og:title" content="Pokedex" />
        <meta
          property="og:description"
          content="Lista de pokemon com seu respectivo link."
        />
        <meta property="og:image" content="http://localhost:3000/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="http://localhost:3000/pokedex" />
        <meta property="twitter:title" content="Pokedex" />
        <meta
          property="twitter:description"
          content="Lista de pokemon com seu respectivo link."
        />
        <meta
          property="twitter:image"
          content="http://localhost:3000/logo.png"
        ></meta>
      </Head>
      <ul className=" list-disc list-inside space-y-2 flex flex-col items-start">
        Lista de Pokemons:
        {pokedex.map((pokemon, index) => (
          <Link href={`/pokedex/${index + 1}`} key={index}>
            <Pokemon
              className=" first-letter:uppercase italic"
              pokemon={pokemon}
            ></Pokemon>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Pokedex;

export const getServerSideProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemonList = await res.json();
  return {
    props: {
      pokedex: pokemonList.results,
    },
  };
};
