import Head from "next/head";
import React from "react";

const PokemonPage = ({ pokemon }) => {
  return (
    <article className=" flex flex-col mx-auto my-8 gap-3 w-48">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <title>{pokemon.name}</title>
        <meta name="title" content={pokemon.name} />
        <meta name="description" content={`Página com o pokemon ${pokemon.name}`} />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={`http://localhost:3000/pokedex/${pokemon.id}`}
        />
        <meta property="og:title" content={pokemon.name} />
        <meta property="og:description" content={`Página com o pokemon ${pokemon.name}`} />
        <meta property="og:image" content="http://localhost:3000/logo.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={`http://localhost:3000/pokedex/${pokemon.id}`}
        />
        <meta property="twitter:title" content={pokemon.name} />
        <meta property="twitter:description" content={`Página com o pokemon ${pokemon.name}`} />
        <meta
          property="twitter:image"
          content="http://localhost:3000/logo.png"
        ></meta>
      </Head>
      <h1 className=" text-2xl font-bold first-letter:uppercase text-center">
        {pokemon.name}
      </h1>
      <p className=" text-center">Peso: {pokemon.height}kg.</p>
      <img className=" min-w-full" src={pokemon.sprites.back_default} />
    </article>
  );
};

export default PokemonPage;

export const getStaticPaths = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const pokemonList = await res.json();

  const paths = pokemonList.results.map((pokemon, index) => ({
    params: { id: (index + 1).toString() },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { id } = context.params;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  const pokemon = await res.json();

  console.log(pokemon);
  return {
    props: {
      pokemon,
    },
  };
};
