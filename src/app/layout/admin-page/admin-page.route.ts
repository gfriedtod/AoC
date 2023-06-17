
import {UserManageComponent} from "../../page/user-manage/user-manage.component";
import {Routes} from "@angular/router";
import {DashbordComponent} from "../../page/dashbord/dashbord.component";
import {CountrieManagementComponent} from "../../page/countrie-management/countrie-management.component";
import {countrieLoaderResolver} from "../../resolver/countrie-loader.resov/countrie-loader.resolver";
import {
  ProjectValidateAdminPageComponent
} from "../../page/project-validate-admin-page/project-validate-admin-page.component";
import {ProjectManagePageComponent} from "../../page/project-manage-page/project-manage-page.component";


export const  adminPageRoute: Routes= [
  {
    path: 'dashboard',
    component:DashbordComponent
  },
  { path: 'user-manage' , component:UserManageComponent},

  { path:'countries-manage' , component:CountrieManagementComponent , resolve:{ card : countrieLoaderResolver}},

  { path: 'manage-project' , component:ProjectValidateAdminPageComponent },

  { path: 'project-manage-page' , component: ProjectManagePageComponent }
]
