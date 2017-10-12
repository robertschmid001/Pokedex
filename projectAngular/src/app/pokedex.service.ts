import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';


@Injectable()
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
  private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
  apiRoot: string = 'https://itunes.apple.com/search';
  results: Object[];
  loading: boolean;
  pokemonInfos: Object;;
  pokemonName: string;

  constructor(private http: Http) {
    this.results = [];
    this.loading = false;

  }
  getPokemonbyName(name: string) {
    return this.http.get(`${this.baseUrl + name}`);
  }

}
