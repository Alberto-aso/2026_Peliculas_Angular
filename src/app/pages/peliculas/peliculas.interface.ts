import { actorAutoCompleteDTO } from "../actores/actores.interface";

export interface PeliculaDTO {
  id: number;
  titulo: string;
  fechaLanzamiento: Date;
  trailer: string;
  poster?: string
}

export interface PeliculaCreacionDTO {
  titulo: string;
  fechaLanzamiento: Date;
  trailer: string;
  poster?: File;
  generosIds?: number[]; // * Arreglo de Generos de la pelicular
  cinesIds?: number[]; // * Arreglo de Cines de la pelicula
  actores?: actorAutoCompleteDTO[];
}
