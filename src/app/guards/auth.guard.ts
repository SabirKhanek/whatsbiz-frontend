import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  const router = inject(Router);
  if (!service.isLoggedIn()) {
    router.navigate(['/login'])
    return false
  }
  return service.isLoggedIn()
};

export const notAuthGuard: CanActivateFn = (route, state) => {
  const service = inject(AuthService);
  const router = inject(Router);
  console.log(service.isLoggedIn())
  if (service.isLoggedIn()) {
    router.navigate(['/dashboard'])
    return false
  }
  return !service.isLoggedIn()
}
