import { Component, Input } from '@angular/core';
import { SelectorMultipleDTO } from './selector-multiple.interface';

@Component({
  selector: 'app-selector-multiple',
  imports: [],
  templateUrl: './selector-multiple.component.html',
  styles: `
  .contenedor {
    display: flex;
  }

  ul {
    height: 200px;
    overflow-y: auto;
    list-style-type: none;
    width: 170px;
    padding: 0;
    border-radius: 3px;
    border: 1px solid #ccc;
  }

  ul li {
    cursor: pointer;
    border-bottom: 1px #eeee solid;
    padding: 2px 10px;
    font-size: 14px;
  }

  ul li:hover {
    background-color: #08c;
  }

  .div-botones {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 5px;
  }


  `,
})
export class SelectorMultipleComponent {
  @Input({ required: true })
  Seleccionados!: SelectorMultipleDTO[]; // Selecionados

  @Input({ required: true })
  NoSeleccionados!: SelectorMultipleDTO[]; // No Seleccionados

  seleccionar(elemento: SelectorMultipleDTO, indice: number) { // Seleccionar
    this.Seleccionados.push(elemento);
    this.NoSeleccionados.splice(indice, 1);
  }
  desseleccionar(elemento: SelectorMultipleDTO, indice: number) { // Deseleccionar
    this.NoSeleccionados.push(elemento);
    this.Seleccionados.splice(indice, 1);
  }

  seleccionarTodo() { // Seleccionad todos los elementos
    this.Seleccionados.push(...this.NoSeleccionados);
    this.NoSeleccionados.length = 0;
  }
  desseleccionarTodo() { // Deseleccionar todos los elementos
    this.NoSeleccionados.push(...this.Seleccionados);
    this.Seleccionados.length = 0; // eliminar todos lo elemtnso de un arreglo, solo lo evaluas como 0 de length
  }
}
