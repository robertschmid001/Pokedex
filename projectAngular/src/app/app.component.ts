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
  pokemonInfos: any;
  pokemonName = "";
  pokemonType = "";
  constructor(private pokedexService: PokedexService) {

  }

  ngOnInit() {
  //  this.loadMore();
  }
  searchPokemon(input) {
    this.pokedexService.getPokemonbyName(input).subscribe(res => { // Success
      let pokemonInfos = res.json();
      console.log(pokemonInfos);
      this.pokemonName = pokemonInfos.name
      this.pokemonType = pokemonInfos.types[0].type.name
      console.log(this.pokemonName)
    })
  }
}
