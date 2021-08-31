import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductosRoutingModule } from './productos-routing.module';
import { RouterModule } from '@angular/router';

import { RopaComponent } from './ropa/ropa.component';
import { RopasComponent } from './ropas/ropas.component';
import { AgregarRopaComponent } from './agregar-ropa/agregar-ropa.component';


@NgModule({
  declarations: [
    RopaComponent,
    RopasComponent,
    AgregarRopaComponent
  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class ProductosModule { }
