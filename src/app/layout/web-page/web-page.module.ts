import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {webPageRoutingModule} from "./web-page-routing-module";
import {HomePageComponent} from "../../page/home-page/home-page.component";
import {MenuBarComponent} from "../../component/menu-bar/menu-bar.component";
import {BouttonComponent} from "../../component/boutton/boutton.component";
import {SearBarComponent} from "../../component/sear-bar/sear-bar.component";
import {MainPresentationComponent} from "../../page/home-page/main-presentation/main-presentation.component";
import {CardPresentationsComponent} from "../../page/home-page/card-presentations/card-presentations.component";
import {CountriesPresentationsComponent} from "../../page/countries-presentations/countries-presentations.component";
import {CardProjectPresentationComponent} from "../../component/card-project-presentation/card-project-presentation.component";
import {CardProComponent} from "../../component/card-pro/card-pro.component";
import {MiniSerachBarComponent} from "../../component/mini-serach-bar/mini-serach-bar.component";
import {FooterComponent} from "../../component/footer/footer.component";
import {ProjectPageComponent} from "../../page/project-page/project-page.component";
import {ProjectIntroComponent} from "../../page/project-page/project-intro/project-intro.component";
import {BurgerButtonComponent} from "../../component/menu-bar/burger-button/burger-button.component";
import {ResponsiveMenuComponent} from "../../component/menu-bar/responsive-menu/responsive-menu.component";
import {IdentityWorkComponent} from "../../page/project-page/identity-work/identity-work.component";
import {MissionProjectComponent} from "../../page/project-page/mission-project/mission-project.component";
import {KeyHandleComponent} from "../../page/project-page/key-handle/key-handle.component";
import {SpecialImageComponent} from "../../page/project-page/mission-project/special-image/special-image.component";
import {ChronoPageComponent} from "../../page/chrono-page/chrono-page.component";
import {ChronoJesuiteComponent} from "../../page/chrono-page/chrono-jesuite/chrono-jesuite.component";
import {CountriesPageComponent} from "../../page/countries-page/countries-page.component";

import {RouterModule} from "@angular/router";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LottieModule} from "ngx-lottie";
import {AppModule, playerFactory} from "../../app.module";
import {MatListModule} from "@angular/material/list";
import {UserAvatarComponent} from "../../component/user-avatar/user-avatar.component";
import {ComposantModule} from "../Composant/composant/composant.module";
import {UserProfileComponent} from "../../page/user-profile/user-profile.component";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {AuthGardService} from "../../service/routeGard/auth-gard.service";



@NgModule({
  declarations: [
    //
   MenuBarComponent,
    // BouttonComponent,
    // SearBarComponent,
    // MainPresentationComponent,
    // CardPresentationsComponent,
    // HomePageComponent,
    // CountriesPresentationsComponent,
    // CardProjectPresentationComponent,
    // CardProComponent,
    // MiniSerachBarComponent,
   FooterComponent,
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
    // UserAvatarComponent,
    // BouttonComponent

    HomePageComponent,
    CountriesPageComponent,
    ChronoPageComponent,
    ProjectPageComponent,
    UserProfileComponent

  ],
  imports: [

    CommonModule,
    RouterModule.forChild(webPageRoutingModule),

    LottieModule.forRoot({player: playerFactory}),
    // pageRouteModule,
    //  RouterModule,
    MatFormFieldModule,
    MatSelectModule,
    MatPaginatorModule,
    FormsModule,
    MatListModule,
    ComposantModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,


  ],
  exports: [
    MenuBarComponent,
    FooterComponent,
    ProjectPageComponent,
    HomePageComponent,
    // BouttonComponent,
    // CountriesPresentationsComponent,
    // SearBarComponent,


  ],
  providers: [
    AuthGardService
  ]

})
export class WebPageModule { }
