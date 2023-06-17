import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from "../../model/ProjectModel";
import {Router} from "@angular/router";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {HttpClient} from "@angular/common/http";
import {environement} from "../../../Environement";

@Component({
  selector: 'app-project-manage-page',
  templateUrl: './project-manage-page.component.html',
  styleUrls: ['./project-manage-page.component.scss']
})
export class ProjectManagePageComponent implements OnInit{
 projectModel!: ProjectModel;
  validate: BouttonService = new BouttonService('validate' , true);
  dismiss: BouttonService = new BouttonService('dismiss' );

 constructor( private  route : Router , private  http : HttpClient) {
 }

 ngOnInit(): void {



   // @ts-ignore
   this.projectModel = history.state.project;

 }

}
