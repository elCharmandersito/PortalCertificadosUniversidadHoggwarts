import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public logueado : boolean;

  constructor(private http: HttpClient, private router : Router) { }

  login(email: string, password: string) {
    let userLogin = {email: email, password: password};
    return this.http.post('http://localhost:3000/login', userLogin).pipe(map((res: any) => {
      console.log(res);
      localStorage.setItem('token', res.token);
      localStorage.setItem('usuario', JSON.stringify(res.usuario));
      this.logueado = true;
      this.router.navigate(['pedidos']);
    }));
  }

  loggedIn() {
    return localStorage.getItem('token') !== null;
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('usuario');
    this.logueado = false;
    this.router.navigate(['home']);
  }
}
