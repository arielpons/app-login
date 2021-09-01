import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RopaComponent } from './ropa/ropa.component';
import { RopasComponent } from './ropas/ropas.component';

const routes: Routes = [
  { path: '', component: RopasComponent },
  { path: ':id', component: RopaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductosRoutingModule { }
