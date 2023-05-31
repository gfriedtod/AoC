import {Component, OnInit} from '@angular/core';
import {CardProModel} from "../component/card-pro/CardProModel/CardProModel";
import {BouttonService} from "../component/boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.scss']
})
export class CountriesPageComponent implements OnInit{
   seemore!: BouttonService;
   cardPro!: CardProModel[];
   seeless!: BouttonService;
   subList!: CardProModel[];
  number: number= 8;
  decrement: boolean =false;
  ngOnInit() {
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
    this.subList = this.cardPro.slice( 0, this.number);

    this.seemore=new BouttonService( 'see more', )
    this.seeless=new BouttonService( 'see less', )
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
