import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';

// Angular Material
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

// Datepicker Adapter provider
import { provideMomentDateAdapter } from '@angular/material-moment-adapter';
import { provideHttpClient, withFetch } from '@angular/common/http';

// SweetAlert2
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { subscriptSizing: 'dynamic' },
    },
    provideMomentDateAdapter({
      parse: {
        dateInput: ['DD-MM-YYYY'],
      },
      display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY',
      },
    }),
    provideHttpClient(withFetch()), // Listo para SSR (Server-Side Rendering)
    importProvidersFrom([SweetAlert2Module.forRoot()]), // Configuración global de SweetAlert2
  ],
};
