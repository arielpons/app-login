import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from '../productos.service';

@Component({
  selector: 'app-ropa',
  templateUrl: './ropa.component.html',
  styleUrls: ['./ropa.component.scss']
})
export class RopaComponent implements OnInit {
  public ropa!: any;
 

  constructor(
    private router: Router,
    private productosService: ProductosService
  ) {}
  ngOnInit(): void {
    this.ropa = this.productosService.getRopaById;
  }

    returnBack(): void {
      this.router.navigate(['/productos']);
    }
}
