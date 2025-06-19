import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ServerErrorInterceptor } from './interceptors/server-error.interceptor';
import { JwtExpiryInterceptor } from './interceptors/jwt-expiration.interceptor';

export const appConfig = {
  providers: [
    provideRouter(routes),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ServerErrorInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtExpiryInterceptor,
      multi: true
    }
  ]
};
