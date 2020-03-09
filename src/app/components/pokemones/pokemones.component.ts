import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-pokemones',
  templateUrl: './pokemones.component.html',
  styleUrls: ['./pokemones.component.css']
})
export class PokemonesComponent implements OnInit {
  pokemons = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {

       this.requestAllPokemon().subscribe((data : any) => {
         console.log(data)
       data.results.forEach((pokemon: any) => {
         this.requestPokemon(pokemon.url).subscribe((pokedata: any) => {
            this.pokemons.push({name:pokedata.name, id:pokedata.id, sprite:pokedata.sprites.front_default, pokedata:pokedata})
            //pour avoir les 151 dans l'ordre
            if(this.pokemons.length === 151){
              this.pokemons.sort(function (a, b) {
                return (a.id - b.id);
              });
            }
          })

        });
      })

  }

  requestAllPokemon() {
    return this.http.get("https://pokeapi.co/api/v2/pokemon?limit=151");
  }

  requestPokemon(pokemon) {
    return this.http.get(pokemon);
  }

}
