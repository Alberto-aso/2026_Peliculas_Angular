import { Component, Input, numberAttribute } from '@angular/core';
import { PeliculaCreacionDTO, PeliculaDTO } from '../peliculas.interface';
import { FormularioPeliculasComponent } from '../formulario-peliculas/formulario-peliculas.component';
import { SelectorMultipleDTO } from '../../../shared/components/selector-multiple/selector-multiple.interface';
import { actorAutoCompleteDTO as ActorAutoCompleteDTO } from '../../actores/actores.interface';

@Component({
  selector: 'app-editar-peliculas',
  imports: [FormularioPeliculasComponent],
  templateUrl: './editar-peliculas.component.html',
  styles: ``,
})
export class EditarPeliculasComponent {
  // Valor de entrada por medio del URL usar withComponentInputBinding
  @Input({ transform: numberAttribute })
  id!: number;

  pelicula: PeliculaDTO = {
    id: this.id,
    titulo: 'Spider-man',
    trailer: 'ABC',
    fechaLanzamiento: new Date('2018-07-25'),
    poster:
      'https://upload.wikimedia.org/wikipedia/en/f/f7/Inside_Out_2_poster.jpg?20240514232832',
  };

  // * Aqui estamos simulando que si tenemos uno seleccionado
  generosSeleccionados: SelectorMultipleDTO[] = [
    { llave: 2, valor: 'Comedia' },
  ];
  generosNoSeleccionados: SelectorMultipleDTO[] = [
    { llave: 1, valor: 'Drama' },
    { llave: 3, valor: 'Terror' },
  ];


  // * Aqui tenemos
  cinesSeleccionados: SelectorMultipleDTO[] = [
    {llave:1, valor: 'Cine 1'},
  ];
  cinesNoSeleccionados: SelectorMultipleDTO[] = [
    {llave:2, valor: 'Cine 2'},
    {llave:3, valor: 'Cine 3'},
  ];

  // * Actores
  actoresSeleccionados: ActorAutoCompleteDTO[] = [
    {id: 2, nombre: 'John Cena', personaje: 'El vengador', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEx6_gOMnKpvX5n1QjU0J9JebBquIHJ20rr6Cpu3eLUwmE64HbMoTo1IKCyhfu8eLwBdbnuaTyx8XtjU-LKpkReM7-SH1_zyHjo8shw&s=10'},
  ]


  guardarCambios(pelicula: PeliculaCreacionDTO) {
    console.log(`Editando Pelicula ${this.id}`, pelicula);
  }
}
