import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { ListadoPeliculasComponent } from '../listado-peliculas/listado-peliculas.component';

// Interfaces
import { FiltroPeliculas } from './filtro-pelicula.interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

// Import location

@Component({
  selector: 'app-filtro-peliculas',
  imports: [
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    ListadoPeliculasComponent,
  ],
  templateUrl: './filtro-peliculas.component.html',
  styles: ``,
})
export class FiltroPeliculasComponent implements OnInit {
  // Servicejs
  private formBuilder = inject(FormBuilder);
  private location = inject(Location);
  private activateRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this.leerValoresURL();

    this.buscarPeliculas(this.form.value as FiltroPeliculas)

    this.form.valueChanges.subscribe((valores) => {
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(this.form.value as FiltroPeliculas);
      this.escribirPsrametrosBuscedaEnUrl(valores as FiltroPeliculas);
    });
  }

  buscarPeliculas(valores: FiltroPeliculas) {
    if (valores.titulo) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.title.indexOf(valores.titulo) !== -1,
      );
    }

    if (valores.generoId != 0) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.generos.indexOf(valores.generoId) !== -1,
      );
    }

    if (valores.proximosEstrenos) {
      this.peliculas = this.peliculas.filter(
        (pelicula) => pelicula.proximosEsterenos,
      );
    }

    if (valores.enCines) {
      this.peliculas = this.peliculas.filter((pelicula) => pelicula.enCines);
    }
  }

  // Clear Form
  limpiar() {
    this.form.patchValue({
      titulo: '',
      generoId: 0,
      proximosEstrenos: false,
      enCines: false,
    });
  }

  // Update Query PArams
  escribirPsrametrosBuscedaEnUrl(valores: FiltroPeliculas) {
    let queryStrings = [];

    if (valores.titulo) {
      queryStrings.push(`titulo=${encodeURIComponent(valores.titulo)}`);
    }

    if (valores.generoId != 0) {
      queryStrings.push(`generoId=${valores.generoId}`);
    }
    if (valores.proximosEstrenos) {
      queryStrings.push(`proximosEstrenos=${valores.proximosEstrenos}`);
    }
    if (valores.enCines) {
      queryStrings.push(`enCines=${valores.enCines}`);
    }

    this.location.replaceState('peliculas/filtrar', queryStrings.join('&'));
  }

  //Read Values from querya
  leerValoresURL() {
    this.activateRoute.queryParams.subscribe((params: any) => {
      let objeto: any = {};

      if (params.titulo) {
        objeto.titulo = params.titulo;
      }

      if (params.generoId) {
        objeto.generoId = Number(params.generoId);
      }

      if (params.procimosEstrenos) {
        objeto.procimosEstrenos = params.procimosEstrenos;
      }

      if (params.enCines) {
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto)

    });
  }

  peliculasOriginal = [
    {
      title: 'Inside Out 2',
      releaseYear: new Date(),
      cost: 1400.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
      generos: [2, 3],
      enCines: true,
      proximosEsterenos: false,
    },
    {
      title: 'Moana 2',
      releaseYear: new Date('2016-05-03'),
      cost: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/7/73/Moana_2_poster.jpg',
      generos: [1, 2],
      enCines: false,
      proximosEsterenos: true,
    },
    {
      title: 'Bad Boys: Ride or Die',
      releaseYear: new Date('2016-05-03'),
      cost: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
      generos: [1],
      enCines: true,
      proximosEsterenos: false,
    },
    {
      title: 'Deadpool & Wolverine',
      releaseYear: new Date('2016-05-03'),
      cost: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
      generos: [2],
      enCines: true,
      proximosEsterenos: false,
    },
    {
      title: 'Oppenheimer',
      releaseYear: new Date('2016-05-03'),
      cost: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
      generos: [3],
      enCines: true,
      proximosEsterenos: false,
    },
    {
      title: 'The Flash',
      releaseYear: new Date('2016-05-03'),
      cost: 300.99,
      poster:
        'https://upload.wikimedia.org/wikipedia/en/8/8b/Bad_Boys_Ride_or_Die_%282024%29_poster.jpg',
      generos: [1],
      enCines: false,
      proximosEsterenos: true,
    },
  ];

  peliculas = this.peliculasOriginal;

  form = this.formBuilder.group({
    titulo: '',
    generoId: 0,
    proximosEstrenos: false,
    enCines: false,
  });

  generos = [
    { id: 1, nombre: 'Drama' },
    { id: 2, nombre: 'Comedia' },
    { id: 3, nombre: 'Terror' },
  ];
}
