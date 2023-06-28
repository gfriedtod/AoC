import {Routes} from "@angular/router";
import {WorkDirectorManageComponent} from "../../page/work-director-manage/work-director-manage.component";
import {doGuardGuard} from "../../service/Do-guard/do-guard.guard";

export const Workroutes: Routes = [

  { path: 'work-director', component: WorkDirectorManageComponent, pathMatch: 'full' ,canActivate: [doGuardGuard]},
]
