import {Component, OnInit} from '@angular/core';
import {ChronoModel} from "../chrono-page/chrono-jesuite/model/ChronoModel";
import {animate, keyframes, style, transition, trigger} from "@angular/animations";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {ActivatedRoute, Router} from "@angular/router";
import {ProjectModel} from "../../model/ProjectModel";
import {ICreateOrderRequest, IPayPalConfig, PayPalScriptService} from "ngx-paypal";
import { PayPalScriptQueryParameters } from '@paypal/paypal-js';


@Component({
  selector: 'app-dont',
  templateUrl: './dont.component.html',
  styleUrls: ['./dont.component.scss'],
  animations: [
    trigger( 'dont', [
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
  private showSuccess: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,

  ) {
  }
ngOnInit() {
  this.i =1
  this.data = history.state.projectData;
  console.log("my data is here ",this.data)
  this.initConfig()

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
  public payPalConfig?: IPayPalConfig;


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

  private initConfig(): void {
    this.payPalConfig = {
      currency: 'EUR',
      clientId: 'sb',
      createOrderOnClient: (data) => <ICreateOrderRequest>{
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'EUR',
              value: '9.99',
              breakdown: {
                item_total: {
                  currency_code: 'EUR',
                  value: '9.99'
                }
              }
            },
            items: [
              {
                name: 'Enterprise Subscription',
                quantity: '1',
                category: 'DIGITAL_GOODS',
                unit_amount: {
                  currency_code: 'EUR',
                  value: '9.99',
                },
              }
            ]
          }
        ]
      },
      advanced: {
        commit: 'true'
      },
      style: {
        label: 'paypal',
        layout: 'vertical'
      },
      onApprove: (data, actions) => {
        console.log('onApprove - transaction was approved, but not authorized', data, actions);
        // @ts-ignore
        actions.order.get().then(
          (details :any)  => {
          console.log('onApprove - you can get full order details inside onApprove: ', details);
        });
      },
      onClientAuthorization: (data) => {
        console.log('onClientAuthorization - you should probably inform your server about completed transaction at this point', data);
        this.showSuccess = true;
      },
      onCancel: (data, actions) => {
        console.log('OnCancel', data, actions);
      },
      onError: err => {
        console.log('OnError', err);
      },
      onClick: (data, actions) => {
        console.log('onClick', data, actions);
      },
    };
  }

}
