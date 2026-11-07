import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

//Angula Material
import { MatButtonModule } from '@angular/material/button';
import { CineCreacionDTO } from '../cines.interface';
import { FormularioCinesComponent } from '../formulario-cines/formulario-cines.component';

@Component({
  selector: 'app-crear-cines',
  imports: [MatButtonModule, FormularioCinesComponent],
  templateUrl: './crear-cines.component.html',
  styles: ``,
})
export class CrearCinesComponent {
  router = inject(Router); // Inject Router with Dependency injection

  guardarCambios(cine: CineCreacionDTO) {
    console.log(`Creando Cine `, cine);
  }
}
