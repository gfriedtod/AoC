import {Component, OnInit} from '@angular/core';
import {ChronoModel} from "../chrono-page/chrono-jesuite/model/ChronoModel";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectModel} from "../../model/ProjectModel";
import  { PayPalScriptService} from "ngx-paypal";



@Component({
  selector: 'app-dont',
  templateUrl: './dont.component.html',
  styleUrls: ['./dont.component.scss'],
  animations: [
    trigger( 'don', [
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
export class DontComponent implements OnInit{
  Left: BouttonService = new BouttonService('<---',true);
  right: BouttonService = new BouttonService('--->',true);
  chrono: ChronoModel = new ChronoModel('Objectif','assets/building6.jpg','lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure nobis non odio officiis perferendis quae quis quod recusandae veritatis!', '' , '');
  beneficiary : ChronoModel = new ChronoModel('Beneficiaire','',',','','')
  i!:number  ;
  data! : ProjectModel

  max : number =5
  dont: BouttonService = new BouttonService('Dont',false);
   impact: ChronoModel = new ChronoModel('Impact','','',',','');
  LocalApport: ChronoModel = new ChronoModel('Contexte','',',','','');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private scriptService: PayPalScriptService
  ) {
  }
ngOnInit() {
  this.i =1
  this.data = history.state.projectData;
  console.log("my data is here ",this.data)

  this.chrono.description= this.data.objectif
  this.chrono.imageAvatar = this.data.image1
  this.beneficiary.imageAvatar = this.data.image2
  this.beneficiary.description = this.data.beneficiary
  this.impact.imageAvatar = this.data.image3
  this.impact.description = this.data.impact
  this.LocalApport.imageAvatar = this.data.image4
  this.LocalApport.description = this.data.contexte

}
  Goleft() {

    if(this.i >=0){
      this.i--;
    }


  }

  Goright() {
    if(this.i <= this.max+1){
      this.i++;
    }

  }

  Donate() {
    // PayPal.Donation.Button({
    //   env: 'sandbox',
    //   hosted_button_id: 'YOUR_SANDBOX_HOSTED_BUTTON_ID',
    //   // business: 'YOUR_EMAIL_OR_PAYERID',
    //   image: {
    //     src: 'https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif',
    //     title: 'PayPal - The safer, easier way to pay online!',
    //     alt: 'Donate with PayPal button'
    //   },
    //   onComplete: function (params) {
    //     // Your onComplete handler
    //   },
    // })


  }
}
