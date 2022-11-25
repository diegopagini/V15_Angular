import { Injectable } from '@angular/core';

/**
 * A a good practice is better to provide the service only in the component that is required.
 */
@Injectable()
export class PokemonService {
  constructor() {}

  getPokemons() {
    return ['Pikachu', 'Charizard'];
  }
}
