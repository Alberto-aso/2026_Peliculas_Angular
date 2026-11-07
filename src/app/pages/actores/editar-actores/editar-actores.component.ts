import { Component, Input, numberAttribute } from '@angular/core';
import { ActorCreacionDTO, ActorDTO } from '../actores.interface';
import { FormularioActoresComponent } from '../formulario-actores/formulario-actores.component';

@Component({
  selector: 'app-editar-actores',
  imports: [FormularioActoresComponent],
  templateUrl: './editar-actores.component.html',
  styles: ``,
})
export class EditarActoresComponent {
  // Valor de entrada por medio del URL Usar withComponentInputBinding
  @Input({ transform: numberAttribute })
  id!: number;

  actor: ActorDTO = {
    id: this.id,
    nombre: 'Alberto Sanchez',
    fechaNacimiento: new Date(1991, 0, 25),
    foto: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/18/TomHolland-byPhilipRomano.jpg/250px-TomHolland-byPhilipRomano.jpg?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail'
  };

  guardarCambios(actor: ActorCreacionDTO) {
    console.log('editando el actor ' + ' ' + this.id, actor);
  }
}
