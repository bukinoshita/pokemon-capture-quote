# pokemon-capture-quote [![Build Status](https://travis-ci.org/bukinoshita/pokemon-capture-quote.svg?branch=master)](https://travis-ci.org/bukinoshita/pokemon-capture-quote)

> Pokemon capture quote


## Install

```
$ npm install --save pokemon-capture-quote
```


## Usage
```js
const pokemonCaptureQuote = require('pokemon-capture-quote')

pokemonCaptureQuote('Pikachu', 'caught')
// => All right! Pikachu was caught!
```


## API

### pokemonCaptureQuote(pokemon, shakes)

returns a `string`.

#### pokemon

Type: `string`<br/>
Required

Pokemon name

#### shakes

Type: `string`<br/>
Options: `0`, `1`, `2`, `3` and `caught`<br/>
Required

How many times the Ball shakes


## Related

- [pokemon-game](https://github.com/bukinoshita/pokemon-game) — Pokemon game — Get 'em all
- [pokedex-api](https://github.com/bukinoshita/pokedex-api) — Pokedex API
- [pokemon-catch-probability](https://github.com/bukinoshita/pokemon-catch-probability) — Check probabilty to catch a pokemon
- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Algorithm to catch a pokemon
- [pokemon-f](https://github.com/bukinoshita/pokemon-f) — Algorithm to calculate `f` on capture pokemon method
- [pokeball-shake](https://github.com/bukinoshita/pokeball-shake) — Algorithm to determine how many times pokeball shakes


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
