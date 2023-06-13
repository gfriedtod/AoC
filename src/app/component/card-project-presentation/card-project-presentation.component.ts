import {Component, Input, OnInit} from '@angular/core';
import {CardProjectPresentationModel} from "./CardProjectPresentationModel/CardProjectPresentationModel";

@Component({
  selector: 'app-card-project-presentation',
  templateUrl: './card-project-presentation.component.html',
  styleUrls: ['./card-project-presentation.component.scss']
})
export class CardProjectPresentationComponent implements  OnInit{
  name!: string ;
  title!: string;
  position! : string
 @Input() cardPresentation! : CardProjectPresentationModel

  ngOnInit(): void {
    this.name = this.cardPresentation.name
    this.title = this.cardPresentation.title
    this.position = this.cardPresentation.position

    console.log(".............................",this.name)
  }
}
