import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  doSubmit() {

    if (this.loginForm.invalid) {
      alert("Todos los campos son obligatorios");
      return;
    }
    const { username, password } = this.loginForm.value
    this.loginService.doSignIn(username, password).subscribe(
      (res) => {
        console.log(res)
        this.router.navigateByUrl("/home")
      },
      (err) => {
        alert(err)
      }
    )
  }

}
