'use strict'

module.exports = (pokemon, shakes) => {
  if (!pokemon && typeof pokemon !== 'string') {
    throw new TypeError('Pokemon name is required')
  }

  if (!shakes && typeof shakes !== 'string') {
    throw new TypeError('Shakes are required')
  }

  switch (shakes) {
    case '0':
      return 'You missed the Pokémon!'

    case '1':
      return 'Darn! The Pokémon broke free!'

    case '2':
      return 'Aww! It appeared to be caught!'

    case '3':
      return 'Shoot! It was so close too!'

    case 'caught':
      return `All right! ${pokemon} was caught!`

    default:
      return 'You missed the Pokémon!'
  }
}
