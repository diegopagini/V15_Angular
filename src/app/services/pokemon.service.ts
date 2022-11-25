import { Injectable } from '@angular/core';

@Injectable()
export class PokemonService {
  constructor() {}

  getPokemons() {
    return ['Pikachu', 'Charizard'];
  }
}
