import { Component } from '@angular/core';
import { PokedexService } from './pokedex.service';
import { Pokemon } from './pokemon'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})




export class AppComponent {
  pokemon: Pokemon[] = [];
  isLoading: boolean = false;
  error: boolean = false;

  constructor(private pokedexService: PokedexService) {

  }

  ngOnInit() {
  //  this.loadMore();
  }
  searchPokemon(input) {
    console.log(input)
    this.pokedexService.getPokemonbyName(input);
  }
}
