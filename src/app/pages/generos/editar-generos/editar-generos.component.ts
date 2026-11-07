import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';

// Componentes
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';

// * Interfaces
import { GeneroCreacionDTO, GeneroDTO } from '../generos.interface';

// * Services
import { GenerosService } from '../generos.service';
import { CargandoComponent } from '../../../shared/components/cargando/cargando.component';
import { MostrarErroresComponent } from '../../../shared/components/mostrar-errores/mostrar-errores.component';
import { Router } from '@angular/router';
import { extraerErrores } from '../../../shared/functions/extraerErrores';

@Component({
  selector: 'app-editar-generos',
  imports: [
    FormularioGeneroComponent,
    CargandoComponent,
    MostrarErroresComponent,
  ],
  templateUrl: './editar-generos.component.html',
  styles: ``,
})
export class EditarGenerosComponent implements OnInit {
  // Services
  generoService = inject(GenerosService);

  ngOnInit(): void {
    this.generoService.obtenerPorId(this.id).subscribe((genero) => {
      this.genero = genero; // Asigna el género obtenido del servicio a la propiedad genero
    });
  }

  // Valor de entrada por medio del URL Usar withComponentInputBinding
  @Input({ transform: numberAttribute })
  id!: number;
  genero?: GeneroDTO; // Provisional
  errores: string[] = [];
  router = inject(Router);


  guardarCambios(genero: GeneroCreacionDTO) {
    this.generoService.editar(this.id, genero).subscribe({
      next: () => {
        alert('Genero editado con exito');
        this.router.navigate(['/generos']); // Redirige al usuario a la página de listado de géneros después de editar con éxito
      },
      error: (error) => {
        const errores = extraerErrores(error); // Extrae los errores de la respuesta del servidor
        this.errores = errores; // Asigna los errores extraídos a la propiedad errores para mostrarlos en la interfaz de usuario
      },
    });
  }
}
