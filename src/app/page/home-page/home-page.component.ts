import {Component, OnInit} from '@angular/core';
import {CardModel} from "./card-presentations/cardModel/CardModel";
import {CardProjectPresentationComponent} from "../../component/card-project-presentation/card-project-presentation.component";

import {CardProModel} from "../../component/card-pro/CardProModel/CardProModel";
import {
  CardProjectPresentationModel
} from "../../component/card-project-presentation/CardProjectPresentationModel/CardProjectPresentationModel";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss', "./home-page2.scss"],
  animations: [
    trigger( 'fade', [
      transition( ':enter', [
        animate( '1s', keyframes([
          style({
            opacity: 0,
            transform: 'translateX(-100%)',
            offset: 0
          }),
          style({
            opacity: 1,
            transform: 'translateX(0)',
            offset: 1
          })
        ]))
      ])
    ])
  ]
})
export class HomePageComponent implements  OnInit{
  cardVision!: CardModel
  cardIdentity!: CardModel
  cardMission!: CardModel
  cardObjectif!: CardModel

  cardsProject!: CardProjectPresentationModel
  cardsProject1: any;
  cardsProject2: any;

  cardPro! : CardProModel
  i: number = 1;
  ngOnInit(): void {

    this.cardMission = new CardModel("mission.gif", "Mission")
    this.cardIdentity = new CardModel("identity.gif", "Identity")
    this.cardVision = new CardModel("vision.gif", "Vision")
    this.cardObjectif = new CardModel("objectif.gif", "Objectif")
    this.cardsProject = new CardProjectPresentationModel('/assets/project.gif', 'Project', '')

    this.cardsProject1 =new CardProjectPresentationModel('/assets/about-us.gif', ' Qui somme nous ?', '')
    this.cardsProject2 =new CardProjectPresentationModel('/assets/countries.gif', 'Ou somme nous ?', '')

  //  this.cardPro = new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont')
  }

  leave(number: number) {

    this.i = number

  }
}
