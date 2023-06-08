import {Component, Input, OnInit} from '@angular/core';
import {WorkModel} from "./project-intro/WorkModel/WorkModel";
import {IdentityModel} from "./identity-work/identyModel/identityModel";
import {
  CardProjectPresentationModel
} from "../../component/card-project-presentation/CardProjectPresentationModel/CardProjectPresentationModel";
import {MissionWork} from "./mission-project/MissionWork/MissionWork";
import {CardProModel} from "../../component/card-pro/CardProModel/CardProModel";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss']
})
export class ProjectPageComponent implements  OnInit {

  Project!: WorkModel;
  identity!: IdentityModel;
  cardpresentation!: CardProjectPresentationModel ;
  mission!: MissionWork;
  cardPro!: CardProModel[] ;
  subList!: CardProModel[];

  number: number = 8;

  decrement : boolean = false;

  seemore!:BouttonService
  seeless!:BouttonService
  cardpresentationmission!: CardProjectPresentationModel;
  cardpresentationproject!: CardProjectPresentationModel;


  ngOnInit(): void {
    this.cardPro = [new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),
      new CardProModel('assets/building4.jpg', "Pro" ,'Doual,18 pres du pont'),

    ]
    this.seemore=new BouttonService( 'see more', )
    this.seeless=new BouttonService( 'see less', )
    this.subList = this.cardPro.slice( 0, this.number);
    this.cardpresentationproject = new  CardProjectPresentationModel('assets/project-project.gif','Project','');
    this.cardpresentationmission = new  CardProjectPresentationModel('assets/project-mission.gif','Mission','');
    this.Project = new WorkModel('LIBERMAN', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure nobis non odio officiis perferendis quae quis quod recusandae veritatis!', 'assets/building4.jpg');
    this.cardpresentation = new CardProjectPresentationModel( 'assets/project-identity.gif','identity','');
    this.identity = new IdentityModel('assets/building4.jpg', 'Lorem' , 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure nobis non odio officiis perferendis quae quis quod recusandae veritatis!');
    this.mission = new MissionWork( 'lorem ipsum dolor sit amet, consectetur ', 'assets/building4.jpg','lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure nobis non odio officiis perferendis quae quis quod recusandae veritatis!', 'assets/building1.jpg');


  }

  increment() {
    // @ts-ignore
    this.subList = this.cardPro.slice(0,this.number+4);
    this.number+=4;
    console.log("ok");
    this.number >4 ? this.decrement = true : this.decrement = false
  }

  dicrement() {
    // @ts-ignore
    this.subList = this.subList.slice(0,this.number-4);
    this.number-=4;
    this.number >8 ? this.decrement = true : this.decrement = false
  }
}
