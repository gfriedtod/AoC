import {Component, OnInit} from '@angular/core';
import {BouttonService} from "../../boutton/bouttonService/BouttonService";
import {animate, animation, keyframes, style, transition, trigger} from "@angular/animations";

// @ts-ignore
@Component({
  selector: 'app-responsive-menu',
  templateUrl: './responsive-menu.component.html',
  styleUrls: ['./responsive-menu.component.scss'],
  animations: [ trigger('statechange', [
    transition(':enter', [
      animate('0.5s', keyframes([
        style( {transform: 'translateX(100%)' ,offset: 0}),
        style({transform: 'translateX(0)', offset: 1})
      ]))
    ]) ,

    transition(':leave', [
      animate('0.5s', keyframes([
        style( {transform: 'translateX(0)' ,offset: 0}),
        style({transform: 'translateX(-100%)', offset: 1})
      ]))
    ])


  ]) ]
})
export class ResponsiveMenuComponent implements  OnInit{
   stateviewLogIn!: BouttonService;
   stateviewSign!: BouttonService;
  panelOpenState!: boolean;
  ngOnInit(): void {

    this.panelOpenState = false;

    this.stateviewLogIn = new BouttonService('LogIn' )
    this.stateviewSign= new BouttonService('Sign up' , true)

  }

  protected readonly close = close;


 ngDestroy() {

 }

  closedstate() {

  }
}
