import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoggedGuard } from './logged.guard';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'productos', canLoad: [LoggedGuard],loadChildren: () => import('./components/productos/productos.module').then(m => m.ProductosModule) },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: "**", component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
