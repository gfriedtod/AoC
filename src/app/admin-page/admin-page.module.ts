import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import {SideBarComponent} from "../component/side-bar/side-bar.component";
import {Router, RouterModule, RouterOutlet} from "@angular/router";
import {MenuBarComponent} from "../component/menu-bar/menu-bar.component";
import {FooterComponent} from "../component/footer/footer.component";
import {BouttonIconComponent} from "../component/boutton-icon/boutton-icon.component";
import {UserManageComponent} from "../user-manage/user-manage.component";
import {DashbordComponent} from "../dashbord/dashbord.component";
import {adminPageRoute} from "./admin-page.route";
import {MatIconModule} from "@angular/material/icon";
import {WebPageModule} from "../web-page/web-page.module";
import {MatFormFieldControl, MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFileUploadModule} from "angular-material-fileupload";
import {MatButtonModule} from "@angular/material/button";
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {HttpClientModule} from "@angular/common/http";
import {MatCardModule} from "@angular/material/card";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {MatLegacyInputModule} from "@angular/material/legacy-input";
import {MatListModule} from "@angular/material/list";
import {ImageSelectorComponent} from "../image-selector/image-selector.component";



// @ts-ignore
@NgModule({
  declarations: [
    //AdminPageComponent,
    SideBarComponent,
    UserManageComponent,

    BouttonIconComponent,
    DashbordComponent,
    ImageSelectorComponent


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
