import {Component, Input, OnInit} from '@angular/core';
import {WorkModel} from "./project-intro/WorkModel/WorkModel";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements  OnInit{

  @Input() Project! : WorkModel;
  ngOnInit(): void {

    this.Project= new WorkModel('LIBERMAN', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure nobis non odio officiis perferendis quae quis quod recusandae veritatis!', 'assets/building4.jpg');
  }

}
