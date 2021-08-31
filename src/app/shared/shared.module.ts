import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedRoutingModule } from './shared-routing.module';


@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [CommonModule, SharedRoutingModule],
  exports: [NavbarComponent,FooterComponent],

})
export class SharedModule { }
