import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {webPageRoutingModule} from "./web-page-routing-module";
import {HomePageComponent} from "../home-page/home-page.component";
import {AppComponent} from "../app.component";
import {MenuBarComponent} from "../component/menu-bar/menu-bar.component";
import {BouttonComponent} from "../component/boutton/boutton.component";
import {SearBarComponent} from "../component/sear-bar/sear-bar.component";
import {MainPresentationComponent} from "../home-page/main-presentation/main-presentation.component";
import {CardPresentationsComponent} from "../home-page/card-presentations/card-presentations.component";
import {CountriesPresentationsComponent} from "../countries-presentations/countries-presentations.component";
import {CardProjectPresentationComponent} from "../card-project-presentation/card-project-presentation.component";
import {CardProComponent} from "../component/card-pro/card-pro.component";
import {MiniSerachBarComponent} from "../component/mini-serach-bar/mini-serach-bar.component";
import {FooterComponent} from "../component/footer/footer.component";
import {ProjectPageComponent} from "../project-page/project-page.component";
import {ProjectIntroComponent} from "../project-page/project-intro/project-intro.component";
import {BurgerButtonComponent} from "../component/menu-bar/burger-button/burger-button.component";
import {ResponsiveMenuComponent} from "../component/menu-bar/responsive-menu/responsive-menu.component";
import {IdentityWorkComponent} from "../project-page/identity-work/identity-work.component";
import {MissionProjectComponent} from "../project-page/mission-project/mission-project.component";
import {KeyHandleComponent} from "../project-page/key-handle/key-handle.component";
import {SpecialImageComponent} from "../project-page/mission-project/special-image/special-image.component";
import {ChronoPageComponent} from "../chrono-page/chrono-page.component";
import {ChronoJesuiteComponent} from "../chrono-page/chrono-jesuite/chrono-jesuite.component";
import {CountriesPageComponent} from "../countries-page/countries-page.component";
import {SideBarComponent} from "../component/side-bar/side-bar.component";
import {WebPageComponent} from "./web-page.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {pageRouteModule} from "../pageRouteModule";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule} from "@angular/forms";
import {LottieModule} from "ngx-lottie";
import {playerFactory} from "../app.module";



@NgModule({
  declarations: [

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
    SpecialImageComponent,
    ChronoPageComponent,
    ChronoJesuiteComponent,
    CountriesPageComponent,


  ],
  imports:[

    CommonModule,
    RouterModule.forChild(webPageRoutingModule),
    LottieModule.forRoot({player: playerFactory}),
   // pageRouteModule,
  //  RouterModule,

    MatFormFieldModule,
    MatSelectModule,

    MatPaginatorModule,
    FormsModule,
  ],
  exports: [
    MenuBarComponent,
    FooterComponent,



  ],

})
export class WebPageModule { }
