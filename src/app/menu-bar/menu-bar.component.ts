import {Component, Input, OnInit} from '@angular/core';
import {BouttonService} from "../boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss'],

})
export class MenuBarComponent implements  OnInit{

  stateview! : BouttonService
  stateviewSign: any;
  stateviewLogIn: any;
  stated!: boolean;
ngOnInit() {


  this.stated =false

  this.stateviewLogIn = new BouttonService('LogIn' )
  this.stateviewSign= new BouttonService('Sign up' , true)

    this.stateview.stateview = true
}

  statechange() {
    this.stated = !this.stated
  }
}
