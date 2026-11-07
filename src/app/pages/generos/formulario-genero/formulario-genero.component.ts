import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';

// Form Builder
import {
  FormBuilder,
  isFormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

// Custom Validations
import { primeraLetraMayuscula } from '../../../shared/functions/validaciones';

// Angular MAterial
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

//Interfaces
import { GeneroCreacionDTO, GeneroDTO } from '../generos.interface';

@Component({
  selector: 'app-formulario-genero',
  imports: [
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './formulario-genero.component.html',
  styles: `

  `,
})
export class FormularioGeneroComponent implements OnInit {
  ngOnInit(): void {
    if (this.modelo !== undefined) {
      this.form.patchValue(this.modelo);
    }
  }

  private formBuilder = inject(FormBuilder); // Inject Form Bilder

  @Input()
  modelo?: GeneroDTO;

  // Send to Father
  @Output()
  posteoFormulario = new EventEmitter<GeneroCreacionDTO>();

  // Create Form Builder
  form = this.formBuilder.group({
    nombre: [
      '',
      { validators: [Validators.required, primeraLetraMayuscula(), Validators.maxLength(250), Validators.minLength(2)] },
    ],
  });

  obtenerErrorCampoNombre(): string {
    let nombre = this.form.controls.nombre;

    if (nombre.hasError('required')) {
      return 'El campo nombre es requerido';
    }
    if (nombre.hasError('maxlength')) {
      return `el campo nombre no puede tener mas de ${nombre.getError('maxlength').requiredLength} caracteres`;
    }
    if (nombre.hasError('minlength')) {
      return `el campo nombre no puede tener menos de ${nombre.getError('minlength').requiredLength} caracteres`;
    }

    if (nombre.hasError('primeraLetraMayuscula')) {
      return nombre.getError('primeraLetraMayuscula').mensaje;
    }

    return '';
  }

  guardarCambios() {
    if (!this.form.valid) {
      return;
    }

    const genero = this.form.value as GeneroCreacionDTO;
    this.posteoFormulario.emit(genero);
  }
}
