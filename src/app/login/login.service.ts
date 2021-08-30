import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user:any[] = [
    { email: 'admin@gmail.com', username: 'admin', password: '0123456789' },
  ];

  public isLogged: boolean = false;
  public isRegister: boolean = false;
 

  constructor(private http: HttpClient) {}
  users:{username: string, password: string, email: string}[] = [];
  

  doSignIn(username: string, password: string): Observable<any> {
    let response!: Observable<any>;
    console.log(username === username && password === password);
    if (username === username && password === password) {
      this.isLogged = true;
      response = of({
        user: username,
        mail: "admin@admin.com",
        secret: "admin-super-secret"
      })
    }else{
      response = throwError("Invalid user or password")
    }
    return response.pipe(delay(1000));
  }
 
  doSignUp(username: string, password: string, email: string){
    let response: Observable<any>;
    let userNew: any = { email, username, password };
    this.users.push(userNew);
    response = of({
      user: username,
      email: email,
      secret: `${username}-super-secret`,
    });
      this.isLogged = true;
      this.isRegister = true;
      console.log(this.isRegister)
      window.alert(`Registro completado ${username}`)
    
  }
  getToken() {
    return localStorage.getItem('token');
  }  

  saveToken( token: string ){
    localStorage.setItem('token', token)
  }
  saveUser=(usuario:any)=>{
    this.user = usuario
  }
}