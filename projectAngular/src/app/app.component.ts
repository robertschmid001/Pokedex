import { Component } from '@angular/core';
import { PokedexService } from './pokedex.service';
import { Pokemon } from './pokemon'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  //private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  //("00" + id).slice(-3)

  pokemonInfos: any;



  constructor(private pokedexService: PokedexService) {

  }

  ngOnInit() {
    //  this.loadMore();
  }
  searchPokemon(input) {
    this.pokemonInfos = this.pokedexService.getPokemonbyName(input);
  }

  pokemonImageUrl(id: number) {
    if (!id) {
      return null;
    }
    return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + ("00" + id).slice(-3) + ".png";
  }
}
