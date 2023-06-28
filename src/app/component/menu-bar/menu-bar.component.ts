import {Component, Input, OnInit} from '@angular/core';
import {BouttonService} from "../boutton/bouttonService/BouttonService";
import {Router} from "@angular/router";
import {UserModel, UserServiceService} from "../../service/UserService/user-service.service";

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
  token! :  any
  admin : boolean = false
  Do : boolean = false

  constructor(
    private route : Router,
    private userService : UserServiceService

  ) {
  }
ngOnInit() {

this.token = localStorage.getItem(this.userService.authKey)
  if(this.token !== null){
    console.log("token................", this.token)
    this.userModel = JSON.parse(this.token)
    console.log(this.userModel.statut)
    this.isidentified = true
    if(this.userModel.statut === "admin"){
      this.admin = true
    }else if(this.userModel.statut === "do"){
      this.Do = true
    }
  }
  console.log(this.userService.authKey)
  this.stated =false

  this.stateviewLogIn = new BouttonService('LogIn' )
  this.stateviewSign= new BouttonService('Sign up' , true)


}

  statechange() {
    this.stated = !this.stated
    console.log(this.stated)
  }


  isidentified: boolean = false;
  userModel!: UserModel;

  navigateRoute(login: string) {
    this.route.navigateByUrl(login);

  }


}
