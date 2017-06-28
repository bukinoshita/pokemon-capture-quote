'use strict'

import test from 'ava'
import m from './'

test(t => {
  const error = t.throws(() => m(), TypeError)
  const shakeError = t.throws(() => m('Pikachu'), TypeError)

  t.is(m('Pikachu', '0'), 'You missed the Pokémon!')
  t.is(m('Pikachu', '1'), 'Darn! The Pokémon broke free!')
  t.is(m('Pikachu', '2'), 'Aww! It appeared to be caught!')
  t.is(m('Pikachu', '3'), 'Shoot! It was so close too!')
  t.is(m('Pikachu', 'caught'), 'All right! Pikachu was caught!')
  t.is(error.message, 'Pokemon name is required')
  t.is(shakeError.message, 'Shakes are required')
})
