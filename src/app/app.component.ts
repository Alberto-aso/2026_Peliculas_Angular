import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Components
import { ListadoPeliculasComponent } from './pages/peliculas/listado-peliculas/listado-peliculas.component';
import { MenuComponent } from './shared/components/menu/menu.component';

// Angular Material
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MenuComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
