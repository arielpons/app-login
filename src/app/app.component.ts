import { Component } from '@angular/core';
import {LoginService} from './login/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 isLogged: boolean = false;
  
  constructor(private loginService: LoginService) {
  }
  get login() {
    return this.loginService.isLogged;
  }
}
