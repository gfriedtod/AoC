import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationLayoutComponent } from './authentication-layout/authentication-layout.component';
import {LoginPageComponent} from "../../../page/login-page/login-page.component";
import {SignUpPageComponent} from "../../../page/sign-up-page/sign-up-page.component";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {WebPageModule} from "../../web-page/web-page.module";
import {Router, RouterModule} from "@angular/router";
import {AuthenticationRoutes} from "./authentication.route";
import {NgxPayPalModule} from "ngx-paypal";
import {AdminPageModule} from "../../admin-page/admin-page.module";
import {BouttonComponent} from "../../../component/boutton/boutton.component";
import {ImageSelectorComponent} from "../../../component/image-selector/image-selector.component";
import {AppModule} from "../../../app.module";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ComposantModule} from "../../Composant/composant/composant.module";



@NgModule({
  declarations: [
    // AuthenticationLayoutComponent,
    LoginPageComponent,
    SignUpPageComponent,
    //BouttonComponent,


  ],
  exports: [
    LoginPageComponent
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,


    //AdminPageModule,

    RouterModule.forChild(AuthenticationRoutes),
    NgxPayPalModule,
    MatIconModule,
    MatProgressBarModule,
    WebPageModule,
    AdminPageModule,
    ComposantModule,
    //WebPageModule,


  ]
})
export class AuthenticationModule { }
