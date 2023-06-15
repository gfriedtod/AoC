import { Component } from '@angular/core';
import {UserModel, UserServiceService} from "../../service/UserService/user-service.service";
import {signOut} from "@angular/fire/auth";
import {BouttonService} from "../boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-profile-present',
  templateUrl: './profile-present.component.html',
  styleUrls: ['./profile-present.component.scss']
})
export class ProfilePresentComponent {
  user!:   UserModel;


  constructor(
    private  profile : UserServiceService
  ) {
  }

  ngOnInit(): void {
    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem(this.profile.authKey))
  }


  signout : BouttonService = new BouttonService('Signout');

  signOut(){
    this.profile.singOut()
  }
}
