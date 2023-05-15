import React, { useEffect, useState } from "react";

const Pokemon = ({ pokemon }) => {
  /* console.log(pokemon) */
  return (
    <li className=" first-letter:uppercase inline-block">
      {pokemon.name}. Link: {pokemon.url}
    </li>
  );
};

export default Pokemon;
