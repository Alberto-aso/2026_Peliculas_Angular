import { Component, inject } from '@angular/core';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// Angular Router
import {RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-menu',
  imports: [
    MatToolbarModule, MatIconModule, MatButtonModule, RouterLink, RouterLinkActive
  ],
  templateUrl: './menu.component.html',
  styles: `
    mat-toolbar {
      position: sticky;
      position: -webkit-sticky;
      top: 0;
      z-index: 1000;
    }
  `
})
export class MenuComponent {

}
