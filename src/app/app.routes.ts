import { RouterModule,Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PokemonesComponent } from "./components/pokemones/pokemones.component";
import { InformationsComponent } from "./components/informations/informations.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pokemones', component: PokemonesComponent },
  { path: 'pokemones/:id', component: InformationsComponent },
  { path: '**', redirectTo:"home" }
];

export const POKE_ROUTING = RouterModule.forRoot(routes);
