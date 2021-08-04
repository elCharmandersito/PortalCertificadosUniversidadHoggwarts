import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../services/login/login.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  constructor(private loginService: LoginService, private router: Router) { }

  canActivate() {
    if (!this.loginService.loggedIn()) {
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}