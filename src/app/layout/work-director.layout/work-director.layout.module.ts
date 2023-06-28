import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WorkDirectorManageComponent} from "../../page/work-director-manage/work-director-manage.component";
import {Router, RouterModule} from "@angular/router";
import {Workroutes} from "./Work-director.route";
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {ComposantModule} from "../Composant/composant/composant.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {MatChipsModule} from "@angular/material/chips";
import {MatSelectModule} from "@angular/material/select";
import {doGuardGuard} from "../../service/Do-guard/do-guard.guard";



@NgModule({
  declarations: [
    WorkDirectorManageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(Workroutes),
    MatCardModule,
    MatInputModule,
    MatDatepickerModule,
    ComposantModule,
    ReactiveFormsModule,
    MatTableModule,
    MatChipsModule,
    MatSelectModule
  ],
  providers: [
    doGuardGuard
  ],
})
export class WorkDirectorLayoutModule { }
