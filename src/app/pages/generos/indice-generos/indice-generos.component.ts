import { Component, inject } from '@angular/core';
import { HttpResponse } from '@angular/common/http';

// * Angular Router
import { RouterLink } from '@angular/router';

// * Angular Material
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

// * Servicios
import { GenerosService } from '../generos.service';
import { GeneroDTO } from '../generos.interface';
import { ListadoGenericoComponent } from '../../../shared/components/listado-generico/listado-generico.component';
import { MatTableModule } from '@angular/material/table';

// * Modelos
import { PaginacionDTO } from '../../../shared/modelos/PaginacionDTO';

// * SweetAlert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'app-indice-generos',
  imports: [
    RouterLink,
    MatButtonModule,
    MatIconModule,
    ListadoGenericoComponent,
    MatTableModule,
    MatPaginatorModule,
    SweetAlert2Module
  ],
  templateUrl: './indice-generos.component.html',
  styles: ``,
})
export class IndiceGenerosComponent {
  generosService = inject(GenerosService);
  generos!: GeneroDTO[];
  columnasAMostrar = ['id', 'nombre', 'acciones'];

  // Paginacion
  paginacion: PaginacionDTO = { pagina: 1, recordsPorPagina: 10 };
  cantidadTotalRegistros!: number;

  constructor() {
    this.cargarRegistros(); // Carga los registros de géneros al inicializar el componente
  }

  cargarRegistros() {
    this.generosService
      .obtenerPaginado(this.paginacion)
      .subscribe((response: HttpResponse<GeneroDTO[]>) => {
        this.generos = response.body as GeneroDTO[]; // Asigna la lista de géneros obtenida del cuerpo de la respuesta a la propiedad generos
        const cabecera = response.headers.get('cantidad-total-registros'); // Obtiene el valor de la cabecera 'cantidad-total-registros' de la respuesta
        this.cantidadTotalRegistros = cabecera ? parseInt(cabecera, 10) : 0; // Asigna el valor de la cabecera a la propiedad cantidadTotalRegistros, convirtiéndolo a número entero. Si la cabecera no existe, se asigna 0
      });
  }

  // Actualizar la paginacion cuando el usuario cambie de página o el número de registros por página
  actualizarPaginacion(datos: PageEvent) {
    this.paginacion = {
      pagina: datos.pageIndex + 1, // pageIndex es 0-based, por eso se suma 1
      recordsPorPagina: datos.pageSize,
    };

    this.cargarRegistros(); // Carga los registros de géneros con la nueva paginación
  }

  borrar(id: number) {

    this.generosService.eliminar(id).subscribe(() => {
      this.paginacion = {pagina: 1, recordsPorPagina: 10}; // Reinicia la paginación a la primera página después de eliminar un registro
      this.cargarRegistros(); // Recarga los registros de géneros después de eliminar uno
    })
  }
}
