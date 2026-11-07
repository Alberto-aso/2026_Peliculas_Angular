import { inject, Injectable } from '@angular/core';
import { GeneroCreacionDTO, GeneroDTO } from './generos.interface';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

// Modelos
import { PaginacionDTO } from '../../shared/modelos/PaginacionDTO';

// funciones
import { construirQueryParams } from '../../shared/functions/contruirQueryParams';

@Injectable({
  providedIn: 'root',
})
export class GenerosService {
  private http = inject(HttpClient);
  private urlBase = environment.apiUrl + '/generos';

  constructor() {}

  // --------------------------------------- GET --------------------------------------- //
  public obtenerPaginado(
    paginacion: PaginacionDTO,
  ): Observable<HttpResponse<GeneroDTO[]>> {
    let queryParams = construirQueryParams(paginacion); // Construye los parámetros de consulta a partir del objeto de paginación

    return this.http.get<GeneroDTO[]>(`${this.urlBase}/GetAllAsync`, {
      params: queryParams,
      observe: 'response',
    }); // Realiza la solicitud GET con los parámetros de consulta
  }

  public obtenerPorId(id: number): Observable<GeneroDTO> {
    return this.http.get<GeneroDTO>(`${this.urlBase}/GetOneByIdAsync/${id}`); // Realiza la solicitud GET para obtener un género por su ID
  }

  // --------------------------------------- GET --------------------------------------- //

  // -------------------------------------- CRUD --------------------------------------- //
  public crear(genero: GeneroCreacionDTO) {
    return this.http.post(`${this.urlBase}/PostAsync`, genero);
  }

  public editar(id: number, genero: GeneroCreacionDTO) {
    return this.http.put(`${this.urlBase}/PutAsync/${id}`, genero);
  }

  public eliminar(id: number) {
    return this.http.delete(`${this.urlBase}/DeleteAsync/${id}`);
  }

  // -------------------------------------- CRUD --------------------------------------- //
}
