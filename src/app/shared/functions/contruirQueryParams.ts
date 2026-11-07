import { HttpParams } from '@angular/common/http';

export function construirQueryParams(obj: any): HttpParams {
  let queryParams = new HttpParams(); // Inicializa un objeto HttpParams vacío

  for (const propiedad in obj) {
    if (obj.hasOwnProperty(propiedad)) {
      queryParams = queryParams.set(propiedad, obj[propiedad]); // Agrega cada propiedad del objeto como un parámetro de consulta
    }
  }

  return queryParams; // Devuelve el objeto HttpParams construido
}
