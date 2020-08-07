const expect = require('chai').expect;
const addPokemonPokemon = require('./addPokemonPure');

describe('Add Pokemon Pure', () => {
    it('should include a new pokemon in my list', () => {
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

        const newPokemons = addPokemons(myPokemons, newPokemon);

        expect(myPokemons).to.deep.equal(newPokemons);
    });
});
