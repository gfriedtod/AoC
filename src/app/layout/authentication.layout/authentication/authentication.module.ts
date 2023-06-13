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



@NgModule({
  declarations: [
   // AuthenticationLayoutComponent,
    LoginPageComponent,
    SignUpPageComponent,
  ],
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    ReactiveFormsModule,
    WebPageModule,
    RouterModule.forChild(AuthenticationRoutes),
    NgxPayPalModule,
    AdminPageModule
  ]
})
export class AuthenticationModule { }
