import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {RouterModule} from "@angular/router";
import {pageRouteModule} from "./pageRouteModule";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";

import {MatPaginatorModule} from "@angular/material/paginator";

import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";

import {WebPageComponent} from "./layout/web-page/web-page.component";
import {WebPageModule} from "./layout/web-page/web-page.module";
import {AdminPageModule} from "./layout/admin-page/admin-page.module";

import {AdminPageComponent} from "./layout/admin-page/admin-page.component";
import { CountriesFormComponent } from './page/countries-form/countries-form.component';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";
import { WorksFormComponent } from './works-form/works-form.component';
import {MatCardModule} from "@angular/material/card";
import {MatDividerModule} from "@angular/material/divider";
import {MatInputModule} from "@angular/material/input";
import { UploafFormsComponent } from './uploaf-forms/uploaf-forms.component';
import { CountrieMakerComponent } from './page/countrie-maker/countrie-maker.component';
import { TestCardComponent } from './test-card/test-card.component';
import { CountrieManagementComponent } from './page/countrie-management/countrie-management.component';
import { CountriesCardComponent } from './component/countries-card/countries-card.component';
import { CountriesManageCardComponent } from './component/countries-manage-card/countries-manage-card.component';
import {countrieLoaderResolver} from "./resolver/countrie-loader.resov/countrie-loader.resolver";
import { LoginPageComponent } from './page/login-page/login-page.component';
import { SignUpPageComponent } from './page/sign-up-page/sign-up-page.component';
import {AuthenticationModule} from "./layout/authentication.layout/authentication/authentication.module";
import {
  AuthenticationLayoutComponent
} from "./layout/authentication.layout/authentication/authentication-layout/authentication-layout.component";
import {NgxPayPalModule} from "ngx-paypal";
import { UserAvatarComponent } from './component/user-avatar/user-avatar.component';
import {ImageSelectorComponent} from "./component/image-selector/image-selector.component";
import {ComposantModule} from "./layout/Composant/composant/composant.module";
import { ChronoFormComponent } from './component/chrono-form/chrono-form.component';
import {MatDatepickerModule} from "@angular/material/datepicker";
import { ProfilePresentComponent } from './component/profile-present/profile-present.component';
import { WorkDirectorManageComponent } from './page/work-director-manage/work-director-manage.component';
import { WorkDirectorLayoutComponent } from './layout/work-director.layout/work-director.layout.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import { ProjectValidatorComponent } from './component/project-validator/project-validator.component';
import { LoaderComponent } from './component/loader/loader.component';
import { ProjectValidateAdminPageComponent } from './page/project-validate-admin-page/project-validate-admin-page.component';
import { ProjectManagePageComponent } from './page/project-manage-page/project-manage-page.component';
import { AddProjectFormComponent } from './component/add-project-form/add-project-form.component';
import { CountriesViewPageComponent } from './page/countries-view-page/countries-view-page.component';
import { CardPresentComponent } from './component/card-present/card-present.component';
import { AddUserFormComponent } from './component/add-user-form/add-user-form.component';
import {adminGuardGuard} from "./service/AdminGuard/admin-guard.guard";
import { DontComponent } from './page/dont/dont.component';

//
// import { AngularFireModule } from '@angular/fire';
//
// import { AngularFireStorageModule } from '@angular/fire/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

  apiKey: "AIzaSyCLfs31OivqUUuj6e7GJqfwnFaxu5ALTb8",
  authDomain: "bureau-devellopement-aoc.firebaseapp.com",
  projectId: "bureau-devellopement-aoc",
  storageBucket: "bureau-devellopement-aoc.appspot.com",
  messagingSenderId: "369593279940",
  appId: "1:369593279940:web:99f3c7e0bed0c76fd17091",
  measurementId: "G-70FK6EYSED"

};

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    WebPageComponent,
    AdminPageComponent,
    CountriesFormComponent,


    AuthenticationLayoutComponent,
      AddUserFormComponent,
      DontComponent,












    // MenuBarComponent,
    // BouttonComponent,
    // SearBarComponent,
    // MainPresentationComponent,
    // CardPresentationsComponent,
    // HomePageComponent,
    // CountriesPresentationsComponent,
    // CardProjectPresentationComponent,
    // CardProComponent,
    // MiniSerachBarComponent,
    // FooterComponent,
    // ProjectPageComponent,
    // ProjectIntroComponent,
    // BurgerButtonComponent,
    // ResponsiveMenuComponent,
    // IdentityWorkComponent,
    // MissionProjectComponent,
    // KeyHandleComponent,
    // SpecialImageComponent,
    // ChronoPageComponent,
    // ChronoJesuiteComponent,
    // CountriesPageComponent,
    // SideBarComponent,

  ],
  imports: [

    BrowserModule,
    // AngularFireModule,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireStorageModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireStorageModule,
    FormsModule,

    LottieModule.forRoot({player: playerFactory}),
    pageRouteModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    WebPageModule,
    AdminPageModule,
    MatIconModule,
    MatProgressBarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    ReactiveFormsModule,
    AuthenticationModule,
    NgxPayPalModule,
    ComposantModule,
    MatDatepickerModule,
    MatSidenavModule,


    // WebPageModule,
  ],
  providers: [
    countrieLoaderResolver,
    adminGuardGuard
  ],
  bootstrap: [AppComponent],
    exports: [



        //ImageSelectorComponent


    ],


})
export class AppModule { }
