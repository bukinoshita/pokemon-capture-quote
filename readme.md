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
Required<br/>
Options: `0`, `1`, `2`, `3` and `caught`

How many times the Ball shakes


## Related

- [catch-pokemon](https://github.com/bukinoshita/catch-pokemon) — Pokemon game - Gotta catch 'em all
- [pokemon-f](https://github.com/bukinoshita/pokemon-f) — Algorithm to calculate `f` on capture pokemon method
- [pokeball-shake](https://github.com/bukinoshita/pokeball-shake) — Algorithm to determine how many times pokeball shakes


## License

MIT © [Bu Kinoshita](https://bukinoshita.io)
