import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user:any[] = [
    { email: 'admin@gmail.com', nombre: 'admin', password: '0123456789' },
  ];

  public isLogged: boolean = false;
  public isRegister: boolean = false;
 

  constructor(private http: HttpClient) {}
  users:{nombre: string, apellido: string, email: string,password: string}[] = [];
  

  doSignIn(email: string, password: string): Observable<any> {
    let response!: Observable<any>;
    if (email === email && password === password) {
      this.isLogged = true;
      response = of({
        mail: "admin@admin.com",
        secret: "admin-secret"
      })
    }else{
      response = throwError("Invalid user or password")
    }
    return response.pipe(delay(1000));
  }
  doLogout(){ 
    this.isLogged = false; 
  }
 
  doSignUp(nombre: string, apellido: string, email: string,password: string){
    let response: Observable<any>;
    let userNew: any = { nombre, apellido, email, password };
    this.users.push(userNew);
    response = of({
      nombre: nombre,
      apellido: apellido,
      email: email,
      password: password
    })
      this.isRegister = true;
      console.log(this.isRegister)
      window.alert(`Registro completado ${nombre}`)
    
  }
  getToken() {
    return localStorage.getItem('token');
  }  
}