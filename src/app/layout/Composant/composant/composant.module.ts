import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BouttonComponent} from "../../../component/boutton/boutton.component";
import {SearBarComponent} from "../../../component/sear-bar/sear-bar.component";
import {MainPresentationComponent} from "../../../page/home-page/main-presentation/main-presentation.component";
import {CardPresentationsComponent} from "../../../page/home-page/card-presentations/card-presentations.component";
import {HomePageComponent} from "../../../page/home-page/home-page.component";
import {CountriesPresentationsComponent} from "../../../page/countries-presentations/countries-presentations.component";
import {
  CardProjectPresentationComponent
} from "../../../component/card-project-presentation/card-project-presentation.component";
import {CardProComponent} from "../../../component/card-pro/card-pro.component";
import {MiniSerachBarComponent} from "../../../component/mini-serach-bar/mini-serach-bar.component";
import {CountriesPageComponent} from "../../../page/countries-page/countries-page.component";
import {ProjectPageComponent} from "../../../page/project-page/project-page.component";
import {ProjectIntroComponent} from "../../../page/project-page/project-intro/project-intro.component";
import {BurgerButtonComponent} from "../../../component/menu-bar/burger-button/burger-button.component";
import {ResponsiveMenuComponent} from "../../../component/menu-bar/responsive-menu/responsive-menu.component";
import {IdentityWorkComponent} from "../../../page/project-page/identity-work/identity-work.component";
import {MissionProjectComponent} from "../../../page/project-page/mission-project/mission-project.component";
import {KeyHandleComponent} from "../../../page/project-page/key-handle/key-handle.component";
import {SpecialImageComponent} from "../../../page/project-page/mission-project/special-image/special-image.component";
import {ChronoPageComponent} from "../../../page/chrono-page/chrono-page.component";
import {ChronoJesuiteComponent} from "../../../page/chrono-page/chrono-jesuite/chrono-jesuite.component";
import {UserAvatarComponent} from "../../../component/user-avatar/user-avatar.component";
import {ImageSelectorComponent} from "../../../component/image-selector/image-selector.component";
import {SideBarComponent} from "../../../component/side-bar/side-bar.component";
import {UserManageComponent} from "../../../page/user-manage/user-manage.component";
import {BouttonIconComponent} from "../../../component/boutton-icon/boutton-icon.component";
import {DashbordComponent} from "../../../page/dashbord/dashbord.component";
import {WorksFormComponent} from "../../../works-form/works-form.component";
import {CountrieMakerComponent} from "../../../page/countrie-maker/countrie-maker.component";
import {TestCardComponent} from "../../../test-card/test-card.component";
import {CountrieManagementComponent} from "../../../page/countrie-management/countrie-management.component";
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatInputModule} from "@angular/material/input";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatIconModule} from "@angular/material/icon";
import {MatExpansionModule} from "@angular/material/expansion";
import {LottieComponent} from "ngx-lottie";
import {MatButtonModule} from "@angular/material/button";
import {ProfilePresentComponent} from "../../../component/profile-present/profile-present.component";
import {LoaderComponent} from "../../../component/loader/loader.component";
import {ProjectValidatorComponent} from "../../../component/project-validator/project-validator.component";
import {ChronoFormComponent} from "../../../component/chrono-form/chrono-form.component";
import {AddProjectFormComponent} from "../../../component/add-project-form/add-project-form.component";
import {CardPresentComponent} from "../../../component/card-present/card-present.component";
import {MatDatepickerModule} from "@angular/material/datepicker";



@NgModule({
  declarations: [
    BouttonComponent,
    SearBarComponent,
    MainPresentationComponent,
    CardPresentationsComponent,
    //HomePageComponent,
    CountriesPresentationsComponent,
    CardProjectPresentationComponent,
    CardProComponent,
    ProfilePresentComponent,
    MiniSerachBarComponent,
   // ProjectPageComponent,
    ProjectIntroComponent,
    BurgerButtonComponent,
    ResponsiveMenuComponent,
    IdentityWorkComponent,
    MissionProjectComponent,
    KeyHandleComponent,
    SpecialImageComponent,
  //  ChronoPageComponent,
    ChronoJesuiteComponent,
   // CountriesPageComponent,
    UserAvatarComponent,
    BouttonComponent,
    ImageSelectorComponent,
    SideBarComponent,
   // UserManageComponent,

    BouttonIconComponent,
  //  DashbordComponent,

    WorksFormComponent,
    CountrieMakerComponent,
    TestCardComponent,
    CountrieManagementComponent,
    LoaderComponent,
    ProjectValidatorComponent,
    ChronoFormComponent,


    AddProjectFormComponent,

    CardPresentComponent,

  ],
  exports: [
    ImageSelectorComponent,
    MainPresentationComponent,
    BouttonComponent,
    MissionProjectComponent,
    CardProjectPresentationComponent,
    IdentityWorkComponent,
    ProjectIntroComponent,
    CardProComponent,
    CardPresentationsComponent,
    MiniSerachBarComponent,
    TestCardComponent,
    ChronoJesuiteComponent,
    SideBarComponent,
    UserAvatarComponent,
    ResponsiveMenuComponent,
    BurgerButtonComponent,
    ProfilePresentComponent,
    LoaderComponent,
    ProjectValidatorComponent,
    CardPresentComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
    MatProgressBarModule,
    MatIconModule,
    MatExpansionModule,
    LottieComponent,
    MatButtonModule,
    MatDatepickerModule,
  ]
})
export class ComposantModule { }
