import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

// Map
import {
  icon,
  latLng,
  LeafletMouseEvent,
  marker,
  Marker,
  MarkerOptions,
  tileLayer,
} from 'leaflet';
import { LeafletModule } from '@bluehalo/ngx-leaflet';

// Interfaces
import { Coordenada } from './coordenada.interface';

@Component({
  selector: 'app-mapa',
  imports: [LeafletModule],
  templateUrl: './mapa.component.html',
  styles: ``,
})
export class MapaComponent implements OnInit {
  ngOnInit(): void {
    this.capas = this.coordenadasIniciales.map((valor) => {
      const marcador = marker(
        [valor.latitud, valor.longitud],
        this.markerOptions,
      );
      return marcador;
    });
  }

  @Input()
  coordenadasIniciales: Coordenada[] = [];

  @Output()
  coordenadaSeleccionada = new EventEmitter<Coordenada>();

  markerOptions: MarkerOptions = {
    icon: icon({
      iconSize: [25, 41],
      iconAnchor: [13, 41],
      iconUrl: 'assets/marker-icon.png',
      iconRetinaUrl: 'assets/marker-icon-2x.png',
      shadowUrl: 'assets/marker-shadow.png',
    }),
  };
  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
        attribution: '...',
      }),
    ],
    zoom: 14,
    center: latLng(28.730381, -106.126115), // 28.730381, -106.126115
  };

  capas: Marker<any>[] = [];

  majecarClick(event: LeafletMouseEvent) {
    const latitud = event.latlng.lat;
    const longitud = event.latlng.lng;

    this.capas = [];
    this.capas.push(marker([latitud, longitud], this.markerOptions));

    this.coordenadaSeleccionada.emit({ latitud, longitud });
  }
}
