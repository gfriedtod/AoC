import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { BouttonComponent } from './boutton/boutton.component';
import { SearBarComponent } from './sear-bar/sear-bar.component';
import {FormsModule} from "@angular/forms";
import { MainPresentationComponent } from './home-page/main-presentation/main-presentation.component';
import { CardPresentationsComponent } from './home-page/card-presentations/card-presentations.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CountriesPresentationsComponent } from './countries-presentations/countries-presentations.component';
import { CardProjectPresentationComponent } from './card-project-presentation/card-project-presentation.component';
import { CardProComponent } from './card-pro/card-pro.component';
import { MiniSerachBarComponent } from './mini-serach-bar/mini-serach-bar.component';
import { FooterComponent } from './footer/footer.component';
import {ProjectPageComponent} from "./project-page/project-page.component";
import {ProjectIntroComponent} from "./project-page/project-intro/project-intro.component";
import {BurgerButtonComponent} from "./menu-bar/burger-button/burger-button.component";
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';
import {RouterModule, RouterOutlet} from "@angular/router";
import {pageRouteModule} from "./pageRouteModule";
import { ResponsiveMenuComponent } from './menu-bar/responsive-menu/responsive-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelect, MatSelectModule} from "@angular/material/select";
import { IdentityWorkComponent } from './project-page/identity-work/identity-work.component';
import { MissionProjectComponent } from './project-page/mission-project/mission-project.component';
import { KeyHandleComponent } from './project-page/key-handle/key-handle.component';
import { SpecialImageComponent } from './project-page/mission-project/special-image/special-image.component';
import {MatPaginatorModule} from "@angular/material/paginator";

export function playerFactory() {
  return player;
}
@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    BouttonComponent,
    SearBarComponent,
    MainPresentationComponent,
    CardPresentationsComponent,
    HomePageComponent,
    CountriesPresentationsComponent,
    CardProjectPresentationComponent,
    CardProComponent,
    MiniSerachBarComponent,
    FooterComponent,
    ProjectPageComponent,
    ProjectIntroComponent,
    BurgerButtonComponent,
    ResponsiveMenuComponent,
    IdentityWorkComponent,
    MissionProjectComponent,
    KeyHandleComponent,
    SpecialImageComponent
  ],
  imports: [
    BrowserModule,
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


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
