import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url: string = 'https://pokeapi.co/api/v2/pokemon?limit=151';
  pokeArray = [];
  myControl = new FormControl();

  constructor(private http: HttpClient) {
    this.http.get(this.url).subscribe((data:any) => {
     // Populating usersArray with names from API
     data.results.forEach(pokemon => {
       this.pokeArray.push(pokemon.name);
     });
   }); console.log(this.pokeArray);
   }

  ngOnInit() {
  }

}
