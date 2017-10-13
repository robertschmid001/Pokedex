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
  InputText = this.InputText;
  



  constructor(private pokedexService: PokedexService) {

  }

  ngOnInit() {
    //  this.loadMore();
  }
  searchPokemon(input) {
    this.pokemonInfos = this.pokedexService.getPokemonbyName(input);
    var a = new SpeechSynthesisUtterance();
    a.text = "pokedex analysing, please wait..."
    a.lang = 'en-GB';

    var u = new SpeechSynthesisUtterance();
    u.text = "that is a," + this.InputText
    u.lang = 'en-GB';
    
    speechSynthesis.speak(a);
    speechSynthesis.pause();
    speechSynthesis.resume();
    speechSynthesis.speak(u);
  }

  pokemonImageUrl(id: number) {
    if (!id) {
      return null;
    }
    return "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" + ("00" + id).slice(-3) + ".png";
  }
}
