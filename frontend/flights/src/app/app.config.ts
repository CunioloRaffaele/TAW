import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

export const appConfig = {
  providers: [
    provideRouter(routes),
    { provide: HTTP_INTERCEPTORS, useClass: ServerErrorInterceptor, multi: true },
  ]
};
