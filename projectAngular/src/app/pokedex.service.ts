import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class PokedexService {
    private baseUrl: string = 'https://pokeapi.co/api/v2/pokemon/';
    private baseSpriteUrl: string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
    apiRoot:string = 'https://itunes.apple.com/search';
    results:Object[];
    loading:boolean;
    pokemonInfos:Object;;
    pokemonName:string;

    constructor(private http: Http) {
        this.results = [];
        this.loading = false;

    }
    getPokemonbyName(name:string) {
      let pokemonName = "test"
        let promise = new Promise((resolve, reject) => {
          this.http.get(`${this.baseUrl+name}`)
            .toPromise()
            .then(
              res => { // Success
                console.log(res.json());
                let pokemonInfos = res.json();
                console.log("#" + pokemonInfos.id)
                console.log("Nom du pokemon: " + pokemonInfos.name)
                this.pokemonName = pokemonInfos.name;
                /*console.log("Type(s): " + pokemonInfos.types[1].type.name)*/
                console.log("Poids: " + pokemonInfos.weight);
                resolve();
              }
            );
        });
        return promise;
      }

}
