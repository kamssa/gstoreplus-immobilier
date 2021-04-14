import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AproposComponent } from './apropos/apropos.component';
import { BlogComponent } from './blog/blog.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DetailBlogComponent } from './detail-blog/detail-blog.component';
import { DevisComponent } from './devis/devis.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InvestissementComponent } from './investissement/investissement.component';
import { PageDetailComponent } from './page-detail/page-detail.component';

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'devis', component: DevisComponent },
  { path: 'page-detail', component: PageDetailComponent },
  { path: 'a-propos', component: AproposComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'detail-blog', component: DetailBlogComponent },
  { path: 'investissement', component: InvestissementComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'connexion', component: ConnexionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
