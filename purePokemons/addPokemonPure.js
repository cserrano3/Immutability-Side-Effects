const cloneDeep = require('lodash.clonedeep');

const addPokemonPure = (pokemons, newPokemon) => {
    const clonedPokemons = cloneDeep(pokemons);

    clonedPokemons.push(newPokemon);
    return clonedPokemons;
};

module.exports = addPokemonPure;
