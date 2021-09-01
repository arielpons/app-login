import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private usuarioRegistradoURL = 'http://localhost:3000/auth/register';
  private usuarioLogueadoURL = 'http://localhost:3000/auth/login';
  public tokenLogin!: string;
  public userLogged!: string;

  constructor(private http: HttpClient) {}

  getRegisterUser(nombre: string, apellido: string, email: string, password: string): Observable<any> {
    const mybody = {nombre, apellido, email, password};
    return this.http.post(this.usuarioRegistradoURL, mybody);
  }

  getLoginUser(email: string, password: string): Observable<any> {
    const mybody = {email,password};
    return this.http.post(this.usuarioLogueadoURL, mybody);
  }
  saveUserLogged(nombre: string) {
    this.userLogged = nombre;
  }

  saveTokenLogin(token: string) {
    if (token) {
      this.tokenLogin = token;
    }
  }
}
