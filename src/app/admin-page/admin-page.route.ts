import {DashbordComponent} from "../dashbord/dashbord.component";
import {UserManageComponent} from "../user-manage/user-manage.component";
import {Routes} from "@angular/router";


export const  adminPageRoute: Routes= [
  {
    path: 'dashboard',
    component:DashbordComponent
  },
  { path: 'user-manage' , component:UserManageComponent}
]
