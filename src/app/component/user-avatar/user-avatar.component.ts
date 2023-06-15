import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from "../../service/UserService/user-service.service";

@Component({
  selector: 'app-user-avatar',
  templateUrl: './user-avatar.component.html',
  styleUrls: ['./user-avatar.component.scss']
})
export class UserAvatarComponent  implements OnInit {
  @Input() userModel!: UserModel;

  ngOnInit() {

    //console.log("image avatar .................",this.userModel.imageAvatar)

  }

}
