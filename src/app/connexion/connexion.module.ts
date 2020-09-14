import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { ConnexionComponent } from './connexion.component';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [ConnexionComponent, LoginComponent, InscriptionComponent],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class ConnexionModule { }
