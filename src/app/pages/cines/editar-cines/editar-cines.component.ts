import { Component, Input, numberAttribute } from '@angular/core';
import { FormularioCinesComponent } from '../formulario-cines/formulario-cines.component';
import { CineCreacionDTO, CineDTO } from '../cines.interface';

@Component({
  selector: 'app-editar-cines',
  imports: [FormularioCinesComponent],
  templateUrl: './editar-cines.component.html',
  styles: ``,
})
export class EditarCinesComponent {
  // Valoir de e ntrada por medio del URL withComponentInputBinding
  @Input({ transform: numberAttribute })
  id!: number;

  cine: CineDTO = { id: this.id, nombre: 'Paseo Central', latitud: 28.631437, longitud: -106.121339}; // 28.631437, -106.121339

  guardarCambios(cine: CineCreacionDTO) {
    console.log(`Editar Cine ${this.id}`, cine)
  }
}
