import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './component/menu-bar/menu-bar.component';
import { BouttonComponent } from './component/boutton/boutton.component';
import { SearBarComponent } from './component/sear-bar/sear-bar.component';
import {FormsModule} from "@angular/forms";
import { MainPresentationComponent } from './home-page/main-presentation/main-presentation.component';
import { CardPresentationsComponent } from './home-page/card-presentations/card-presentations.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CountriesPresentationsComponent } from './countries-presentations/countries-presentations.component';
import { CardProjectPresentationComponent } from './card-project-presentation/card-project-presentation.component';
import { CardProComponent } from './component/card-pro/card-pro.component';
import { MiniSerachBarComponent } from './component/mini-serach-bar/mini-serach-bar.component';
import { FooterComponent } from './component/footer/footer.component';
import {ProjectPageComponent} from "./project-page/project-page.component";
import {ProjectIntroComponent} from "./project-page/project-intro/project-intro.component";
import {BurgerButtonComponent} from "./component/menu-bar/burger-button/burger-button.component";
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {RouterModule, RouterOutlet} from "@angular/router";
import {pageRouteModule} from "./pageRouteModule";
import { ResponsiveMenuComponent } from './component/menu-bar/responsive-menu/responsive-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import { IdentityWorkComponent } from './project-page/identity-work/identity-work.component';
import { MissionProjectComponent } from './project-page/mission-project/mission-project.component';
import { KeyHandleComponent } from './project-page/key-handle/key-handle.component';
import { SpecialImageComponent } from './project-page/mission-project/special-image/special-image.component';
import {MatPaginatorModule} from "@angular/material/paginator";
import { ChronoPageComponent } from './chrono-page/chrono-page.component';
import { ChronoJesuiteComponent } from './chrono-page/chrono-jesuite/chrono-jesuite.component';
import {AngularFireStorageModule} from "@angular/fire/compat/storage";
import {AngularFireModule} from "@angular/fire/compat";
import { CountriesPageComponent } from './countries-page/countries-page.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import {WebPageComponent} from "./web-page/web-page.component";
import {WebPageModule} from "./web-page/web-page.module";
import {webPageRoutingModule} from "./web-page/web-page-routing-module";

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
    RouterOutlet,
    pageRouteModule,
    RouterModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    WebPageModule,





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
