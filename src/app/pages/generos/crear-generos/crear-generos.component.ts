import { Component, inject } from '@angular/core';

// Router
import { Router, RouterLink } from '@angular/router';

// Custom Validations
import { FormularioGeneroComponent } from '../formulario-genero/formulario-genero.component';

// Interfaces
import { GeneroCreacionDTO } from '../generos.interface';
import { GenerosService } from '../generos.service';
import { extraerErrores } from '../../../shared/functions/extraerErrores';
import { MostrarErroresComponent } from '../../../shared/components/mostrar-errores/mostrar-errores.component';

@Component({
  selector: 'app-crear-generos',
  imports: [
    FormularioGeneroComponent,
    MostrarErroresComponent
],
  templateUrl: './crear-generos.component.html',
  styles: `


  `,
})
export class CrearGenerosComponent {
  private router = inject(Router); // Inject Router with Dependency injection
  private generosService = inject(GenerosService);

  // List Errores
  errores: string[] = [];

  guardarCambios(genero: GeneroCreacionDTO) {
    //console.log(genero);
    this.generosService.crear(genero).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate([['/generos']]);
      },
      error: (err) => {
        console.log(err)
        const errores = extraerErrores(err);

        this.errores = errores;
      }
    });
  }
}
