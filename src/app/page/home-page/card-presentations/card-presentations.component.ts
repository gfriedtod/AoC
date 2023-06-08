import {Component, Input, OnInit} from '@angular/core';

import {CardModel} from "./cardModel/CardModel";

@Component({
  selector: 'app-card-presentations',
  templateUrl: './card-presentations.component.html',
  styleUrls: ['./card-presentations.component.scss']
})
export class CardPresentationsComponent implements OnInit{
  title: any;
@Input() cardModel! : CardModel
   path!: string;
  ngOnInit() {
    this.path = "/assets/"+this.cardModel.path
    this.title = this.cardModel.title

  }


}
