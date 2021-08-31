import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup , Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-agregarproductos',
  templateUrl: './agregar-ropa.component.html',
  styleUrls: ['./agregar-ropa.component.scss']
})
export class AgregarRopaComponent implements OnInit {

  addProductForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private productosService: ProductosService
    
  ) {}

  ngOnInit(): void {
    this.addProductForm = this.formBuilder.group({
      tipo: ['', Validators.required],
      cantidad: ['', Validators.required],
      precio: ['', Validators.required],
      descripcion: ['', Validators.required],
    });
  }

  doSubmit() {
    const { tipo, cantidad, precio, descripcion } = this.addProductForm.value;
    if (this.addProductForm.invalid) {
      alert('Datos ingresados inválidos');
      return;
    } else if (
      tipo !== 'campera' &&
      tipo !== 'pantalón'&&
      tipo !== 'buzo' &&
      tipo !== 'remera' 
    ) {
      alert('Tipo de ropa no existente');
      return;
    }

    this.productosService.addRopafromAPI(tipo, cantidad, precio, descripcion)
      .subscribe(
        (res) => {
          alert('Producto añadido exitosamente');
          this.addProductForm.reset();
        },
        (err) => {
          alert(err.error.message);
        }
      );
  }
}