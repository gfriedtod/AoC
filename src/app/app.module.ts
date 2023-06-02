import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import {FormsModule} from "@angular/forms";

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

import {WebPageComponent} from "./web-page/web-page.component";
import {WebPageModule} from "./web-page/web-page.module";
import {AdminPageModule} from "./admin-page/admin-page.module";

import {AdminPageComponent} from "./admin-page/admin-page.component";
import { CountriesFormComponent } from './countries-form/countries-form.component';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatButtonModule} from "@angular/material/button";

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
    // WebPageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [

   // WebPageComponent
    // AppComponent,
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
  ]
})
export class AppModule { }
