import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [PokemonService],
})
export class HomePageComponent implements OnInit {
  pokemons$: Observable<string[]>;

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons$ = this.pokemonService.getPokemons();
  }
}
