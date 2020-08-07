const addPokemonImpure = require('./impurePokemon/addPokemonImpure');
const addPokemonPure = require('./purePokemons/addPokemonPure');

const myPokemons = [
    {
        name: 'Pikachu',
        type: 'Electric',
        moves: ['Thunder Shock', 'Quick Attack', 'Agility', 'Thunder Bolt']
    },
    {
        name: 'Evee',
        type: 'Normal',
        moves: ['Tackle', 'Quick Attack', 'Sand Attack', 'Bite']
    }
];

const newPokemon = {
    name: 'Mewtwo',
    type: 'Psychic',
    moves: ['Psychic', 'Double Team', 'Shadow Ball', 'Swift']
};

console.log('myPokemons (Original): ', myPokemons);

// myPokemons array is passed by reference
const updatedPokemons = addPokemonImpure(myPokemons, newPokemon);

console.log('updatedPokemons: ', updatedPokemons);

console.log('myPokemons (after calling addPokemonImpure): ', myPokemons);

/* ------------------------------------- */

console.log('===========================================');

const myPokemons2 = [
    {
        name: 'Pikachu',
        type: 'Electric',
        moves: ['Thunder Shock', 'Quick Attack', 'Agility', 'Thunder Bolt']
    },
    {
        name: 'Evee',
        type: 'Normal',
        moves: ['Tackle', 'Quick Attack', 'Sand Attack', 'Bite']
    }
];

const newPokemon2 = {
    name: 'Mewtwo',
    type: 'Psychic',
    moves: ['Psychic', 'Double Team', 'Shadow Ball', 'Swift']
};

console.log('myPokemons2 (Original): ', myPokemons2);

// myPokemons2 array is also passed by reference, but its value will have a new reference due to deepClone
const updatedPokemons2 = addPokemonPure(myPokemons2, newPokemon2);

console.log('updatedPokemons2: ', updatedPokemons2);

console.log('myPokemons2 (after calling addPokemonPure): ', myPokemons2);