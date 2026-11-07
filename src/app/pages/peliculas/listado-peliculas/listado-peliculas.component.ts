import { Component, Input, OnInit } from '@angular/core';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// Angular Common
import {
  UpperCasePipe,
  //NgFor,
  //NgOptimizedImage,
  //NgIf,
} from '@angular/common';

import { ListadoGenericoComponent } from '../../../shared/components/listado-generico/listado-generico.component';

@Component({
  selector: 'app-listado-peliculas',
  imports: [
    UpperCasePipe,
    //NgFor,
    //NgOptimizedImage,
    //NgIf,
    ListadoGenericoComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './listado-peliculas.component.html',
  styles: `
    .peliculas-contenedor {
      display: flex;
      flex-wrap: wrap;
      flex-direction: row;
      align-items: center;
    }

    .pelicula-contenedor {
      margin-right: 2%;
      margin-bottom: 10px;
      text-align: center;
    }

    p {
      max-width: 225px;
      font-size: 15px;
      font-weight: bold;
    }

    button {
      margin-left: 1rem;
    }
  `,
})
export class ListadoPeliculasComponent implements OnInit {
  ngOnInit(): void {}

  title = 'angular-peliculas';

  lastName: string = 'MMLON';
  age: number = 30;

  // In this case the component will require the input to be provided by the paren
  @Input({ required: true }) movies!: any[];

  duplicarNumero(valor: number): number {
    return valor * 2;
  }
}
