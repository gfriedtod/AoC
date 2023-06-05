import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SideBarComponent} from "../component/side-bar/side-bar.component";
import {RouterModule} from "@angular/router";
import {BouttonIconComponent} from "../component/boutton-icon/boutton-icon.component";
import {UserManageComponent} from "../user-manage/user-manage.component";
import {DashbordComponent} from "../dashbord/dashbord.component";
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
import {ImageSelectorComponent} from "../image-selector/image-selector.component";
import {WorksFormComponent} from "../works-form/works-form.component";



// @ts-ignore
@NgModule({
  declarations: [
    //AdminPageComponent,
    SideBarComponent,
    UserManageComponent,

    BouttonIconComponent,
    DashbordComponent,
    ImageSelectorComponent,
    WorksFormComponent


  ],
  exports: [
    SideBarComponent,
    DashbordComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(adminPageRoute),

    MatIconModule,
    WebPageModule,
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

    MatListModule,



  ]
})
export class AdminPageModule { }
