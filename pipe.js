const _ = require('lodash');

const myPokemons = [
  {
      name: 'Pikachu',
      type: 'Electric',
      moves: ['Thunder Shock', 'Quick Attack', 'Agility', 'Thunder Bolt']
  },
  {
      name: 'Evee',
      type: 'Normal',
      moves: ['Tackle', 'Quick Attack', 'Swift', 'Bite']
  },
  {
    name: 'Mewtwo',
    type: 'Psychic',
    moves: ['Psychic', 'Fire Blast', 'Shadow Ball', 'Swift']
},
  {
    name: 'Charizard',
    type: 'Fire/Flying',
    moves: ['Flamethrower', 'Wing Attack', 'Fire Blast', 'Dragon Claw']
  }];


const getMoves = pokemons => pokemons.map((pokemon) => pokemon.moves)

const flatten = moves => _.flattenDeep(moves);

const removeDuplicates = moves => _.uniq(moves)

const parsePokemonMoves = _.flow([getMoves, flatten, removeDuplicates]);

const uniquePokemonMoves = parsePokemonMoves(myPokemons);

console.log(uniquePokemonMoves)

