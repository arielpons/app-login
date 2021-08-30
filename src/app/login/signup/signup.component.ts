import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';


@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private LoginService: LoginService,
    private router: Router) { }


  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      email: ['',  [Validators.required, Validators.email]],
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(10)]]
    } );  
  }

  doSubmit() {
    if (this.signUpForm.invalid) {
      alert("Completa todos los campos");
      return;
    }
    else{
      this.router.navigateByUrl("/signin")
    }

  }
}

