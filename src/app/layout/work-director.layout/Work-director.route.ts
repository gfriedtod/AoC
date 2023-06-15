import {Routes} from "@angular/router";
import {WorkDirectorManageComponent} from "../../page/work-director-manage/work-director-manage.component";

export const Workroutes: Routes = [

  { path: 'work-director', component: WorkDirectorManageComponent, pathMatch: 'full' },
]
