import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from '../usuarios.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usuariosService: UsersService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)] ],
      apellido: ['', [Validators.required, Validators.minLength(3)] ],
      email: ['', [Validators.required, Validators.email ]],
      password: ['', [Validators.required, Validators.pattern( new RegExp('^[a-z0-9áéíóúñü@$!%*?&]{3,30}$', 'i') )]],
    });
  }
    doSubmit() {
    if (this.signUpForm.invalid) {
      alert("Completa los campos correctamente");
      return;
    }
    const { nombre, apellido, email, password } = this.signUpForm.value;
    this.usuariosService.getRegisterUser(nombre, apellido, email, password).subscribe(
        (response) => {
          console.log(response);
          this.router.navigateByUrl('/login/signin');
        },
        (err) => {
          alert(err.error.message);
        }
      );
  }
}

