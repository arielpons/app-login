import { Injectable } from '@angular/core';
import { CanLoad, Router, UrlTree } from '@angular/router';
import { LoginService } from './login/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuard implements CanLoad {
  constructor(
    private loginService: LoginService,
    private router:Router
    ) { }
  canLoad(): boolean | UrlTree  {
    if (this.loginService.isLogged) {
      return true;
    }
    return this.router.parseUrl("/login/signin");
  }

}
