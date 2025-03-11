import { ApplicationConfig, ErrorHandler, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';
import Material from '@primeng/themes/material'
import { GlobalErrorHandler } from './Core/Error_Manager/GlobalErrorHandler';
import { AppStateManagerService } from './Core/service/state-manager/app-state-manager.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    //Inserendo questo provider, rende angular capace di effettuare chiamate http
    provideHttpClient(),
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Material
      }
    }),
    {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    }
  ]
};
