import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { NG_VALIDATORS } from '@angular/forms';
import { EmailNotAvailableDirective } from './Directives/CustomValidators/EmailNotAvailable.directive';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: NG_VALIDATORS,
      useExisting: EmailNotAvailableDirective,
      multi: true,
    }
  ]
};
