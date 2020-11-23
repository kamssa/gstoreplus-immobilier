import { Routes } from '@angular/router';
import {AccueilComponent} from '../../accueil/accueil.component';
import {DashboardComponent} from '../../dashboard/dashboard.component';
import {AccountComponent} from '../../account/account/account.component';
import {DetailTerrainComponent} from '../../terrain/detail-terrain/detail-terrain.component';
import {DemandeComponent} from '../../demande/demande/demande.component';
import {CreateCompteComponent} from '../../account/create-compte/create-compte.component';
import {VerificationRegisterComponent} from '../../verification-register/verification-register.component';
import {ActualiteComponent} from '../../actualite/actualite.component';
import {TerrainVilleComponent} from '../../terrain/terrain-ville/terrain-ville.component';
import {AproposComponent} from "../../apropos/apropos.component";
import {FoncierComponent} from "../../foncier/foncier/foncier.component";
import {ImmobilierComponent} from "../../immobilier/immobilier/immobilier.component";
import {BlogComponent} from "../../blog/blog/blog.component";
import {AllterrainComponent} from "../../terrain/allterrain/allterrain.component";


export const AdminLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'accueil', component: AccueilComponent},
  {path: 'detail/:id' , component: DetailTerrainComponent},
  { path: 'account', component: AccountComponent },
  { path: 'demande/:id', component: DemandeComponent },
  { path: 'createCompte', component: CreateCompteComponent },
  { path: 'verification', component: VerificationRegisterComponent },
  { path: 'actualite', component: ActualiteComponent},
  { path: 'terrainParVille', component: TerrainVilleComponent},
  { path: 'dashboard/:id', component: DashboardComponent },
  { path: 'apropos', component: AproposComponent },
  { path: 'foncier', component: FoncierComponent },
  { path: 'immobilier', component: ImmobilierComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'terrainVille/:id', component: TerrainVilleComponent },
  { path: 'allterrain', component: AllterrainComponent },
  ];
