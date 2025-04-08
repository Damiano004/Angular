import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { AFPOspedaleAPIService } from './Core/Service/AFPOspedaleAPI.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    // quando ho fatto partire la mia app, fai questo
    provideAppInitializer(() => inject(AFPOspedaleAPIService).getListaPazienti())
  ]
};
