import { latLng } from 'leaflet';
import { SelectorMultipleDTO } from './../../../shared/components/selector-multiple/selector-multiple.interface';
import { PeliculaCreacionDTO, PeliculaDTO } from './../peliculas.interface';
import { Component, EventEmitter, inject, input, Input, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule, MatGridTile } from '@angular/material/grid-list';

// Shared
import { InputImgComponent } from '../../../shared/components/input-img/input-img.component';
import moment from 'moment';
import { SelectorMultipleComponent } from '../../../shared/components/selector-multiple/selector-multiple.component';
import { AutocompleteActoresComponent } from '../../actores/autocomplete-actores/autocomplete-actores.component';
import { actorAutoCompleteDTO, ActorCreacionDTO } from '../../actores/actores.interface';

@Component({
  selector: 'app-formulario-peliculas',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatButtonModule,
    MatGridListModule,
    MatGridTile,

    RouterLink,
    InputImgComponent,
    SelectorMultipleComponent,
    AutocompleteActoresComponent,
  ],
  templateUrl: './formulario-peliculas.component.html',
  styles: ``,
})
export class FormularioPeliculasComponent implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  // * SELECION de Generos
  @Input({ required: true })
  generosNoSelecionados!: SelectorMultipleDTO[];
  @Input({ required: true })
  generosSelecionados!: SelectorMultipleDTO[];

  // * SELECCION de Peliculas
  @Input({ required: true })
  cinesNoSeleccionados!: SelectorMultipleDTO[];
  @Input({ required: true })
  cinesSeleccionados!: SelectorMultipleDTO[];

  // * Actores
  @Input({required: true})
  actoresSeleccionados!: actorAutoCompleteDTO[];

  @Input()
  modelo?: PeliculaDTO;

  @Output()
  posteoFormulario = new EventEmitter<PeliculaCreacionDTO>();

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    titulo: ['', { validators: [Validators.required] }],
    fechaLanzamiento: new FormControl<Date | null>(null, {
      validators: [Validators.required],
    }),
    trailer: '',
    poster: new FormControl<File | string | null>(null),
  });

  archivoSelecionado(file: File) {
    this.form.controls.poster.setValue(file);
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }

    const pelicula = this.form.value as PeliculaCreacionDTO;
    pelicula.fechaLanzamiento = moment(pelicula.fechaLanzamiento).toDate();

    const generosIds = this.generosSelecionados.map((valor) => valor.llave);
    pelicula.generosIds = generosIds;

    const cinesIds = this.cinesSeleccionados.map((valor) => valor.llave);
    pelicula.cinesIds = cinesIds;

    pelicula.actores = this.actoresSeleccionados;

    this.posteoFormulario.emit(pelicula);
  }

  obtenerErrorCampoTitulo(): string {
    let campo = this.form.controls.titulo;

    if (campo.hasError('required')) {
      return 'El campo nombre es obligatorio';
    }

    return '';
  }

  obtenerErrorFechaLanzamiento(): string {
    let campo = this.form.controls.fechaLanzamiento;

    if (campo.hasError('required')) {
      return 'El campo fechaLanzamiento es obligatorio';
    }

    return '';
  }
}
