
import {UserManageComponent} from "../../page/user-manage/user-manage.component";
import {Routes} from "@angular/router";
import {DashbordComponent} from "../../page/dashbord/dashbord.component";
import {CountrieManagementComponent} from "../../page/countrie-management/countrie-management.component";


export const  adminPageRoute: Routes= [
  {
    path: 'dashboard',
    component:DashbordComponent
  },
  { path: 'user-manage' , component:UserManageComponent},

  { path:'countries-manage' , component:CountrieManagementComponent}
]
