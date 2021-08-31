import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from '../../shared/not-found/not-found.component';
import { AgregarRopaComponent } from './agregar-ropa/agregar-ropa.component';
import { RopaComponent } from './ropa/ropa.component';
import { RopasComponent } from './ropas/ropas.component';

const routes: Routes = [
  { path: '', component: RopasComponent },
  { path: ':id', component: RopaComponent },
  { path: 'agregar', component: AgregarRopaComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
