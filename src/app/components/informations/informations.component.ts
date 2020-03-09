import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informations',
  templateUrl: './informations.component.html',
  styleUrls: ['./informations.component.css']
})
export class InformationsComponent implements OnInit {

  pokemon = undefined;

  constructor(private http: HttpClient, private ParamsRouter: ActivatedRoute) { }

  ngOnInit() {
    this.ParamsRouter.params.subscribe(params => {
      console.log(params['id']);
      this.http.get("https://pokeapi.co/api/v2/pokemon/" + params['id']).subscribe((pokedata:any)=>{
        this.pokemon = {name:pokedata.name,
                        id:pokedata.id,
                        sprite:pokedata.sprites.front_default,
                        height:pokedata.height,
                        weight:pokedata.weight,
                        stats:pokedata.stats,
                        pokedata:pokedata}
      });
    })
  }

}
