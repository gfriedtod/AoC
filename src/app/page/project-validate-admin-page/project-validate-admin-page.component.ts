import {Component, OnInit} from '@angular/core';
import {ProjectModel} from "../../model/ProjectModel";
import {Router} from "@angular/router";
import {environement} from "../../../Environement";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-project-validate-admin-page',
  templateUrl: './project-validate-admin-page.component.html',
  styleUrls: ['./project-validate-admin-page.component.scss']
})
export class ProjectValidateAdminPageComponent implements OnInit{

  constructor(
    private route: Router,
    private http: HttpClient
  ) {
  }
  project!: ProjectModel[]
  loades : boolean = false

  ngOnInit(): void {
    this.http.get<ProjectModel[]>(environement+'/project/all').subscribe(

      data => {
        console.log(
          data
        )
        this.project = data
        this.loades = true
      }

    )
  }
  navaigeteRoute(project: ProjectModel) {

    this.route.navigate( ['project-manage-page'], { state: { project: project } });

  }
}
