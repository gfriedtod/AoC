import {Component, Input, OnInit} from '@angular/core';

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
   imageUrl!: string;
  workId!: string;
  pageId!: string;


  ngOnInit(): void {

    this.imageUrl = this.cardPresentation.imageUrl
    this.title = this.cardPresentation.title
    this.position = this.cardPresentation.position
    this.workId = this.cardPresentation.workId
    this.pageId = this.cardPresentation.pageId

    console.log(".............................")

}

}
