import {Component, Input, OnInit} from '@angular/core';
import {ProjectModel} from "../../model/ProjectModel";
import {Router} from "@angular/router";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {HttpClient} from "@angular/common/http";
import {environement} from "../../../Environement";
import {UserModel} from "../../service/UserService/user-service.service";
import {MatDialog} from "@angular/material/dialog";
import {AddProjectFormComponent} from "../../component/add-project-form/add-project-form.component";

@Component({
  selector: 'app-project-manage-page',
  templateUrl: './project-manage-page.component.html',
  styleUrls: ['./project-manage-page.component.scss']
})
export class ProjectManagePageComponent implements OnInit{
 projectModel!: ProjectModel;
  validate: BouttonService = new BouttonService('validate' , true);
  dismiss: BouttonService = new BouttonService('dismiss' );
  director!: UserModel ;
  loades: boolean = false;


 constructor( private  route : Router , private  http : HttpClient , private  dialog : MatDialog) {
 }

 ngOnInit(): void {



   // @ts-ignore
   //jer ecuperer les informations du projet injecter sur la  roiute'

   this.projectModel = history.state.project;

/* je recupere les informations de tous les directeur d'oeuvres
* elle vont nous etres utiles pour identifiere qui a preoposer le projet s*
*/
   this.http.get(environement+'/user/' + this.projectModel.userId).subscribe(
     data => {
       this.director = data as UserModel;
       console.log("may data " , data )
       this.loades=true
     }
   )

 }

  validated() {

   this.dialog.open(AddProjectFormComponent , {

     //j'injecte les donnes du projets dans le formulaire de validation ,

     data: this.projectModel
   })

  }
}
