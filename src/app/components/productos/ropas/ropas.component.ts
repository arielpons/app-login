import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductosService } from 'src/app/components/productos/productos.service';


@Component({
  selector: 'app-ropas',
  templateUrl: './ropas.component.html',
  styleUrls: ['./ropas.component.scss']
})
export class RopasComponent implements OnInit {
  constructor(
    private productosService: ProductosService,
    private router: Router
  ) {}

  public Ropas = this.productosService.Ropas;

  ngOnInit(): void {}

  
}
