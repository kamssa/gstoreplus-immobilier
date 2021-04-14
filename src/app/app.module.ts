import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DevisComponent } from './devis/devis.component';
import { PageDetailComponent } from './page-detail/page-detail.component';
import { AproposComponent } from './apropos/apropos.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InvestissementComponent } from './investissement/investissement.component';
import { BlogComponent } from './blog/blog.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnexionComponent } from './connexion/connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    DevisComponent,
    PageDetailComponent,
    AproposComponent,
    ContactsComponent,
    InvestissementComponent,
    BlogComponent,
    DetailBlogComponent,
    InscriptionComponent,
    ConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
