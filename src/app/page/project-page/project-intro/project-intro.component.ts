
import {Component, Input, OnInit} from '@angular/core';
import {WorkingModel, WorkModel} from "./WorkModel/WorkModel";


@Component({
  selector: 'app-project-intro',
  templateUrl: './project-intro.component.html',

  styleUrls: ['./project-intro.component.scss']
})
export class ProjectIntroComponent implements OnInit {
  name!: string;
  identity!: string;
  image!: string;

  @Input() Project!: WorkingModel

  ngOnInit(): void {
    this.name = this.Project.name;
    this.identity = this.Project.identity;
    this.image = this.Project.image;
    console.log("nameuuuuuuuuuuuuuuuu",this.name)
  }

}

