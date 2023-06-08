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
    UploafFormsComponent,




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

        // WebPageModule,
    ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

  ],


})
export class AppModule { }
