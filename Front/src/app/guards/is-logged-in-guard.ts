
import { inject } from '@angular/core';
import { LoginService } from '../services/login/login';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map } from 'rxjs';

export const isLoggedInGuard: CanActivateFn = (route, state) => {
  
  
  const loginService = inject(LoginService);
  const router = inject(Router);
  

  if(loginService.user() === null) {
    
    router.navigate(['login']);
    return false;
  }
   if(loginService.user() === undefined) {
    return loginService.getUsers().pipe(
      map(_  => {
        return true
      }),
      catchError(_ => 
        router.navigate(['login'])
      )
    )
  }

  return true;
};
// 4h10:24