import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

/**
 * A a good practice is better to provide the service only in the component that is required.
 */
@Injectable()
export class PokemonService {
  getPokemons(): Observable<string[]> {
    return of(['Pikachu', 'Charizard', 'Mew']);
  }
}
