import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './layout.routing';
import {LayoutComponent} from './layout.component';
import {ComponentsModule} from '../../components/components.module';
import {MaterialModule} from '../../material/material.module';
import {TerrainComponent} from "../../terrain/terrain/terrain.component";
import {TerrainDetailComponent} from "../../terrain/terrain-detail/terrain-detail.component";
import {ImmobilierComponent} from "../../immobilier/immobilier/immobilier.component";
import {AccueilComponent} from "../../accueil/accueil.component";
import {BlogComponent} from "../../blog/blog/blog.component";
import {AccountComponent} from "../../account/account/account.component";
import {ConnexionComponent} from "../../account/connexion/connexion.component";
import {RegistryComponent} from "../../account/registry/registry.component";
import {DemandeComponent} from "../../demande/demande/demande.component";
import {ListeTerrainComponent} from "../../terrain/liste-terrain/liste-terrain.component";
import {DetailTerrainComponent} from "../../terrain/detail-terrain/detail-terrain.component";
import {VerificationComponent} from "../../demande/verification/verification.component";
import {VilleComponent} from "../../ville/ville.component";
import {CreateCompteComponent} from "../../account/create-compte/create-compte.component";
import {VerificationRegisterComponent} from "../../verification-register/verification-register.component";
import {AproposComponent} from "../../apropos/apropos.component";
import {TerrainVilleComponent} from "../../terrain/terrain-ville/terrain-ville.component";
import {ActualiteComponent} from "../../actualite/actualite.component";
import {AllterrainComponent} from "../../terrain/allterrain/allterrain.component";
import {ContactComponent} from "../../contact/contact.component";
import {DemandeDevidComponent} from "../../demande-devid/demande-devid.component";
import {SidebarComponent} from "../../sidebar/sidebar.component";
import {InvestissementComponent} from "../../investissement/investissement.component";
import {DashboardComponent} from "../../dashboard/dashboard.component";
import {FoncierComponent} from "../../foncier/foncier/foncier.component";
import {LoginComponent} from "../../account/login/login.component";
import {PasswordOublierComponent} from "../../account/password-oublier/password-oublier.component";

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        ReactiveFormsModule,
        ComponentsModule,
        MaterialModule
    ],
  declarations: [
    LayoutComponent,
    TerrainComponent,
    TerrainDetailComponent,
    ImmobilierComponent,
    AccueilComponent,
    BlogComponent,
    AccountComponent,
    ConnexionComponent,
    RegistryComponent,
    DemandeComponent,
    ListeTerrainComponent,
    DetailTerrainComponent,
    VerificationComponent,
    VilleComponent,
    CreateCompteComponent,
    VerificationRegisterComponent,
    AproposComponent,
    TerrainVilleComponent,
    ActualiteComponent,
    AllterrainComponent,
    ContactComponent,
    DemandeDevidComponent,
    SidebarComponent,
    InvestissementComponent,
    DashboardComponent,
    FoncierComponent,
    LoginComponent,
    PasswordOublierComponent,

  ]
})

export class LayoutModule {}
