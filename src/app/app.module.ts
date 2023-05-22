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
    CardProjectPresentationComponent
  ],
    imports: [
        BrowserModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
