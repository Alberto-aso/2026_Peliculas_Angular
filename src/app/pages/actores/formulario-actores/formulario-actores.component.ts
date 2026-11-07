import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import moment from 'moment';

// Forms
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { ActorCreacionDTO, ActorDTO } from '../actores.interface';

// custom validaitons
import { fechaNoPuedeSerFutura } from '../../../shared/functions/validaciones';
import { InputImgComponent } from '../../../shared/components/input-img/input-img.component';

@Component({
  selector: 'app-formulario-actores',
  imports: [
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    InputImgComponent
],
  templateUrl: './formulario-actores.component.html',
  styles: ``,
})
export class FormularioActoresComponent implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  // * Form Builder
  private formBuilder = inject(FormBuilder);

  @Input()
  modelo?: ActorDTO;

  @Output()
  posteoFormulario = new EventEmitter<ActorCreacionDTO>();

  form = this.formBuilder.group({
    nombre: ['', { validators: [Validators.required] }],
    fechaNacimiento: new FormControl<Date | null>(null, {
      validators: [Validators.required, fechaNoPuedeSerFutura()],
    }),
    foto: new FormControl<File | null | string>(null)
  });

  obtenerErrorCampoNombre() {
    let campo = this.form.controls.nombre;

    if (campo.hasError('required')) {
      return 'El Campo nombre es requerid';
    }

    return '';
  }

  obtenerErrorCampoFechaNacimiento() {
    let campo = this.form.controls.fechaNacimiento;

    if (campo.hasError('required')) {
      return 'El Campo fecha es requerid';
    }

    if (campo.hasError('futuro')) {
      return campo.getError('futuro').mensaje;
    }

    return null;
  }

  archivoSeleccionado(file: File) {
    this.form.controls.foto.setValue(file);
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }

    const actor = this.form.value as ActorCreacionDTO;
    actor.fechaNacimiento = moment(actor.fechaNacimiento).toDate();

    if(typeof actor.foto === "string") {
      actor.foto = undefined
    }

    this.posteoFormulario.emit(actor);
  }


}
