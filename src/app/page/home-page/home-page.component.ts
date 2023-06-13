import {Component, OnInit} from '@angular/core';
import {CardModel} from "./card-presentations/cardModel/CardModel";
import {CardProjectPresentationComponent} from "../../component/card-project-presentation/card-project-presentation.component";

import {CardProModel} from "../../component/card-pro/CardProModel/CardProModel";
import {
  CardProjectPresentationModel
} from "../../component/card-project-presentation/CardProjectPresentationModel/CardProjectPresentationModel";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss', "./home-page2.scss"]
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
}
