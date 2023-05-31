import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import {SideBarComponent} from "../component/side-bar/side-bar.component";
import {RouterModule, RouterOutlet} from "@angular/router";
import {MenuBarComponent} from "../component/menu-bar/menu-bar.component";
import {FooterComponent} from "../component/footer/footer.component";
import {BouttonIconComponent} from "../boutton-icon/boutton-icon.component";
import {UserManageComponent} from "../user-manage/user-manage.component";
import {DashbordComponent} from "../dashbord/dashbord.component";
import {adminPageRoute} from "./admin-page.route";



@NgModule({
  declarations: [

    SideBarComponent,
    UserManageComponent,
    BouttonIconComponent,
    DashbordComponent

  ],
  exports: [
    SideBarComponent
  ],
  imports: [
    CommonModule,

    RouterModule.forChild(adminPageRoute)
  ]
})
export class AdminPageModule { }
