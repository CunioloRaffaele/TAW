import { inject } from '@angular/core';
import { Router, CanActivateFn, ActivatedRouteSnapshot } from '@angular/router';

export const roleAuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const token = localStorage.getItem('jwt_token');
  if (!token) {
    inject(Router).navigate(['/signin']);
    return false;
  }
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    const allowedRoles = route.data['roles'] as number[];
    if (allowedRoles && allowedRoles.includes(payload.role)) {
      return true;
    }
  } catch {}
  inject(Router).navigate(['/forbidden']);
  return false;
};
