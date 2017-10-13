import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import 'rxjs/Rx';


@Injectable()
export class PokedexService {
  private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {
  }
  getPokemonbyName(name: string) {
    return this.http.get(this.baseUrl + name).share();
  }  
}



      //  sprite: `${this.baseSpriteUrl}${id}.png`,
