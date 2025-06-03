import { CanActivateFn, Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const miToken: string = localStorage.getItem(environment.tokenVar) as string;
  const router = inject(Router);

  if (miToken == '' || miToken == null || miToken == 'undefined') {
    router.navigateByUrl("/home");
    return false;
  } else {
    return true;
  }
};
