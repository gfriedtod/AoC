<<<<<<< HEAD
import {Component, Input, OnInit} from '@angular/core';
import {WorkModel} from "./WorkModel/WorkModel";
=======
import { Component } from '@angular/core';
>>>>>>> origin/master

@Component({
  selector: 'app-project-intro',
  templateUrl: './project-intro.component.html',
<<<<<<< HEAD
  styleUrls: ['./project-intro.component.scss']
})
export class ProjectIntroComponent implements OnInit {
  name!: string;
  identity!: string;
  image!: string;

  @Input() Project! : WorkModel
  ngOnInit(): void {
    this.name = this.Project.name;
    this.identity = this.Project.identity;
    this.image = this.Project.image;
  }

=======
  styleUrls: ['./project-intro.component.css']
})
export class ProjectIntroComponent {
>>>>>>> origin/master

}
