import {Component, Input, OnInit} from '@angular/core';
import {
  CardProjectPresentationModel
} from "../../card-project-presentation/CardProjectPresentationModel/CardProjectPresentationModel";
import {CardProModel} from "./CardProModel/CardProModel";

@Component({
  selector: 'app-card-pro',
  templateUrl: './card-pro.component.html',
  styleUrls: ['./card-pro.component.scss']
})
export class CardProComponent implements OnInit{
  name!: string ;
  title!: string;
  position! : string
  @Input() cardPresentation! : CardProModel


  ngOnInit(): void {
    this.name = this.cardPresentation.name
    this.title = this.cardPresentation.title
    this.position = this.cardPresentation.position
}

}
