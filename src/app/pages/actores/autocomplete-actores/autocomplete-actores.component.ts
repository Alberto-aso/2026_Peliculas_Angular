import { actorAutoCompleteDTO, ActorCreacionDTO } from './../actores.interface';
import { Component, Input, ViewChild } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';

// Angula Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatTable, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { CdkDragDrop, DragDropModule, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-autocomplete-actores',
  imports: [
    MatAutocompleteModule,
    ReactiveFormsModule,
    FormsModule, // * Aqui no vamos a usar Reactive Forms
    MatFormFieldModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    DragDropModule
  ],
  templateUrl: './autocomplete-actores.component.html',
  styles: `
  img {
    vertical-align: middle;
    margin-right: 8px;
    width: 35px;
    height: 45px;
  }

  mat-icon {
    cursor: pointer;
  }

  table {
    width: 100%;
    margin-bottom: 2rem;
  }

  `,
})
export class AutocompleteActoresComponent {

  // * Input
  @Input({required: true})
  actoresSeleccionados: actorAutoCompleteDTO[] = [];

  // * FROM
  public control = new FormControl();

  actores: actorAutoCompleteDTO[] = [
    {id: 1, nombre: 'Tom Halland', personaje: '', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFP4ZEGzr42n72sZGJWvCkwKyCY0qbIm8LvfG12yeEovOzxn7JaVmAixmFNfgYUhmWL3vUc-Ny0lu9chWuZKElRXuTtDlVjgOrLYWMLg&s=10'},
    {id: 2, nombre: 'John Cena', personaje: '', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrEx6_gOMnKpvX5n1QjU0J9JebBquIHJ20rr6Cpu3eLUwmE64HbMoTo1IKCyhfu8eLwBdbnuaTyx8XtjU-LKpkReM7-SH1_zyHjo8shw&s=10'},
    {id: 3, nombre: 'Randy Orton', personaje: '', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLYo5qvRpHir_pDg-azFRshWKlubTFDAqUjCMsa4wDWgqKYkN9hZYLTRQf&s=10'}
  ];

  // ------------------------- CRUD -------------------------------//
  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table!: MatTable<actorAutoCompleteDTO>

  public actorSeleccionado(actor: MatAutocompleteSelectedEvent) {
    const seleccionado: actorAutoCompleteDTO = actor.option.value;
    this.control.patchValue('');

    if(this.actoresSeleccionados.some(a => a.id === seleccionado.id)) return;

    this.actoresSeleccionados.push(actor.option.value);
    if (this.table != undefined) {
      this.table.renderRows(); // Cargamos nuevamente las filas
    }
  }

  eliminar(actor: actorAutoCompleteDTO) {
    const indice = this.actoresSeleccionados.findIndex((act: actorAutoCompleteDTO) => act.id === actor.id);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

  finalizarArrastre(event: CdkDragDrop<actorAutoCompleteDTO[]>) {
    const indicePrevio = this.actoresSeleccionados.findIndex(actor => actor === event.item.data);

    moveItemInArray(this.actoresSeleccionados, indicePrevio, event.currentIndex);

    this.table.renderRows();
  }
  // ------------------------- CRUD -------------------------------//

}
