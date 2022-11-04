import { Routes } from '@angular/router';
import {AccueilComponent} from '../../accueil/accueil.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {AccountComponent} from '../../account/account/account.component';
import {DetailTerrainComponent} from '../../terrain/detail-terrain/detail-terrain.component';
import {DemandeComponent} from '../../demande/demande/demande.component';
import {VerificationRegisterComponent} from '../../verification-register/verification-register.component';
import {TerrainVilleComponent} from '../../terrain/terrain-ville/terrain-ville.component';
import {AproposComponent} from "../../apropos/apropos.component";

import {BlogComponent} from "../../blog/blog/blog.component";
import {AllterrainComponent} from "../../terrain/allterrain/allterrain.component";
import {ContactComponent} from "../../contact/contact.component";
import {DemandeDevidComponent} from "../../demande-devid/demande-devid.component";
import {InvestissementComponent} from "../../investissement/investissement.component";
import {RegistryComponent} from "../../account/registry/registry.component";
import {FoncierComponent} from "../../foncier/foncier/foncier.component";
import {ImmobilierComponent} from "../../immobilier/immobilier/immobilier.component";
import {ConnexionComponent} from "../../account/connexion/connexion.component";


export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accueil', component: AccueilComponent},
  {path: 'detail/:id' , component: DetailTerrainComponent},
  { path: 'account', component: AccountComponent },
  { path: 'demande/:id', component: DemandeComponent },
  { path: 'verification', component: VerificationRegisterComponent },
  { path: 'terrainParVille', component: TerrainVilleComponent},
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'terrainVille/:id', component: TerrainVilleComponent },
  { path: 'allterrain', component: AllterrainComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'devis', component: DemandeDevidComponent },
  { path: 'investissement', component: InvestissementComponent },
  { path: 'investissement', component: InvestissementComponent },
  { path: 'foncier', component: FoncierComponent },
  { path: 'immobilier', component: ImmobilierComponent },
  { path: 'connexion', component: ConnexionComponent },
  { path: 'registry', component: RegistryComponent },
  { path: 'detail', component: DetailTerrainComponent },
  { path: 'demande', component: DemandeComponent }


];
