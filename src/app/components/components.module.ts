import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import {BandeComponent} from './bande/bande.component';
import {MaterialModule} from "../material/material.module";


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ],
  declarations: [
    FooterComponent,
    NavbarComponent,
    BandeComponent

  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    BandeComponent

  ]
})
export class ComponentsModule { }
