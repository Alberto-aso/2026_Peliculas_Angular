import { Routes } from '@angular/router';

// Components
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { IndiceGenerosComponent } from './pages/generos/indice-generos/indice-generos.component';
import { CrearGenerosComponent } from './pages/generos/crear-generos/crear-generos.component';
import { IndiceActoresComponent } from './pages/actores/indice-actores/indice-actores.component';
import { CrearActoresComponent } from './pages/actores/crear-actores/crear-actores.component';
import { IndiceCinesComponent } from './pages/cines/indice-cines/indice-cines.component';
import { CrearCinesComponent } from './pages/cines/crear-cines/crear-cines.component';
import { CrearPeliculasComponent } from './pages/peliculas/crear-peliculas/crear-peliculas.component';
import { EditarGenerosComponent } from './pages/generos/editar-generos/editar-generos.component';
import { EditarActoresComponent } from './pages/actores/editar-actores/editar-actores.component';
import { EditarPeliculasComponent } from './pages/peliculas/editar-peliculas/editar-peliculas.component';
import { EditarCinesComponent } from './pages/cines/editar-cines/editar-cines.component';
import { FiltroPeliculasComponent } from './pages/peliculas/filtro-peliculas/filtro-peliculas.component';

export const routes: Routes = [
  // Landing Page
  { path: '', component: LandingPageComponent },

  // Generos
  { path: 'generos', component: IndiceGenerosComponent },
  { path: 'generos/crear', component: CrearGenerosComponent },
  { path: 'generos/editar/:id', component: EditarGenerosComponent },

  // Actores
  { path: 'actores', component: IndiceActoresComponent },
  { path: 'actores/crear', component: CrearActoresComponent },
  { path: 'actores/editar/:id', component: EditarActoresComponent },

  // Cines
  { path: 'cines', component: IndiceCinesComponent },
  { path: 'cines/crear', component: CrearCinesComponent },
  { path: 'cines/editar/:id', component: EditarCinesComponent },

  //Peliculas
  { path: 'peliculas/crear', component: CrearPeliculasComponent },
  { path: 'peliculas/editar/:id', component: EditarPeliculasComponent },
  {path: 'peliculas/filtrar', component: FiltroPeliculasComponent},

  //Not Found
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
