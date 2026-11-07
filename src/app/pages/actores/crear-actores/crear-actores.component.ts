import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

// Angular Material
import { MatButtonModule } from '@angular/material/button';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';
import { ActorCreacionDTO } from '../actores.interface';

@Component({
  selector: 'app-crear-actores',
  imports: [MatButtonModule, FormularioActoresComponent],
  templateUrl: './crear-actores.component.html',
  styles: ``,
})
export class CrearActoresComponent {
  router = inject(Router); // Inject Router with Dependency injection

  guardarCambios(actor: ActorCreacionDTO) {
    // ... Guardmaos cambios

    console.log('Creando el actor ', actor); // MAndamos el mendaje por consola
  }
}
