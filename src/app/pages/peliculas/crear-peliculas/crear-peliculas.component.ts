import { SelectorMultipleDTO } from './../../../shared/components/selector-multiple/selector-multiple.interface';
import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

// Angular MAterial
import { MatButtonModule } from '@angular/material/button';
import { PeliculaCreacionDTO } from '../peliculas.interface';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { actorAutoCompleteDTO } from '../../actores/actores.interface';

@Component({
  selector: 'app-crear-peliculas',
  imports: [MatButtonModule, FormularioPeliculasComponent],
  templateUrl: './crear-peliculas.component.html',
  styles: ``,
})
export class CrearPeliculasComponent {
  router = inject(Router); // Inject Router with Dependency injection

  generosSeleccionados: SelectorMultipleDTO[] = []; //No puede haber Generos seleccionados
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor: 'Drama'},
    {llave:2, valor: 'Comedia'},
    {llave:3, valor: 'Terror'}
  ];

  cinesSeleccionados: SelectorMultipleDTO[] = []; // No puede haer cines seleccionados
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor: 'Cine 1'},
    {llave:2, valor: 'Cine 2'},
    {llave:3, valor: 'Cine 3'},
  ];

  actoresSeleccionados: actorAutoCompleteDTO[] = [];

  guardarCambios(pelicula: PeliculaCreacionDTO) {
    // ... Guardmaos cambios
    //this.router.navigate(['/']);

    console.log(`Creando Pelicula`, pelicula);
  }
}
