import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';
import { UsersService } from '../usuarios.service';


@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;
  constructor(
    private loginService: LoginService,
    private usersService: UsersService,
    private router: Router,
    private fb: FormBuilder,
  ) { }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  doSubmit() {
    if (this.loginForm.invalid) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const { email, password } = this.loginForm.value
    this.loginService.doSignIn(email, password).subscribe(
      (response) => {
        this.usersService.saveUserLogged(response.data.user.nombre);
        this.usersService.saveTokenLogin(response.data.token);
        this.router.navigateByUrl('/home');
      },
      (err) => {
        if (err.status === 400) {
          alert(err.error.message);
          this.loginForm.reset();
          this.router.navigateByUrl('login/signin');
        } else {
          this.router.navigateByUrl('error');
        }
      }
    );
  }
}
