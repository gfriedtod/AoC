import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarComponent} from "../../component/side-bar/side-bar.component";
import {RouterModule} from "@angular/router";
import {BouttonIconComponent} from "../../component/boutton-icon/boutton-icon.component";
import {UserManageComponent} from "../../page/user-manage/user-manage.component";
import {DashbordComponent} from "../../page/dashbord/dashbord.component";
import {adminPageRoute} from "./admin-page.route";
import {MatIconModule} from "@angular/material/icon";
import {WebPageModule} from "../web-page/web-page.module";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";

import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";

import {MatListModule} from "@angular/material/list";
import {ImageSelectorComponent} from "../../component/image-selector/image-selector.component";
import {WorksFormComponent} from "../../works-form/works-form.component";
import {CountrieMakerComponent} from "../../page/countrie-maker/countrie-maker.component";
import {MatDialog, MatDialogModule} from "@angular/material/dialog";
import {TestCardComponent} from "../../test-card/test-card.component";
import {CountriesManageCardComponent} from "../../component/countries-manage-card/countries-manage-card.component";
import {CountrieManagementComponent} from "../../page/countrie-management/countrie-management.component";
import {CountriesCardComponent} from "../../component/countries-card/countries-card.component";
import {BouttonComponent} from "../../component/boutton/boutton.component";
import {ComposantModule} from "../Composant/composant/composant.module";
import {MatTableModule} from "@angular/material/table";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {
  ProjectValidateAdminPageComponent
} from "../../page/project-validate-admin-page/project-validate-admin-page.component";
import {ProjectManagePageComponent} from "../../page/project-manage-page/project-manage-page.component";
import {MatPaginatorModule} from "@angular/material/paginator";
import {adminGuardGuard} from "../../service/AdminGuard/admin-guard.guard";



// @ts-ignore
@NgModule({
  declarations: [
    //AdminPageComponent,
    // SideBarComponent,
    // UserManageComponent,
    //
    // BouttonIconComponent,
     DashbordComponent,
    //
    // WorksFormComponent,
    // CountrieMakerComponent,
    // TestCardComponent,
    // CountrieManagementComponent,
  //  CountriesCardComponent,
    CountriesManageCardComponent,
    ProjectValidateAdminPageComponent,
    ProjectManagePageComponent,
   // BouttonComponent


  ],
  exports: [
   // SideBarComponent,
    DashbordComponent,
  //  BouttonComponent,

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminPageRoute),

    MatIconModule,

    MatFormFieldModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatProgressBarModule,
    //MatFileUploadModule,
    HttpClientModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatInputModule,
    MatInputModule,
    MatDialogModule,

    MatListModule,
    ComposantModule,
    MatTableModule,
    MatButtonToggleModule,
    MatPaginatorModule,


  ],
  providers: [

  ],
})
export class AdminPageModule { }
