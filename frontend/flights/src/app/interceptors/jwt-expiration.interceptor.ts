import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable()
export class JwtExpiryInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('postmessages_token');
    if (token && this.isJwtExpired(token)) {
      alert('Session expired. Please log in again.');
      localStorage.removeItem('postmessages_token');
      // Optionally, redirect to login page here
      return throwError(() => new Error('JWT expired'));
    }
    return next.handle(req);
  }

  private isJwtExpired(token: string): boolean {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const now = Math.floor(Date.now() / 1000);
      return payload.exp < now;
    } catch {
      return true;
    }
  }
}