import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsComponent } from 'src/app/components/forms/forms.component';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  standalone: true,
  selector: 'app-home-page',
  imports: [CommonModule, FormsComponent],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  providers: [PokemonService],
})
export class HomePageComponent implements OnInit {
  pokemons: string[];

  constructor(private pokemonService: PokemonService) {}

  ngOnInit(): void {
    this.pokemons = this.pokemonService.getPokemons();
  }
}
