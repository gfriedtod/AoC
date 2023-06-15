import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {UserServiceService} from "../../service/UserService/user-service.service";
import {user} from "@angular/fire/auth";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {UploadFormsService} from "../../service/forms-service/upload-forms.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  form: any;
  profileForm!: FormGroup;
  private user: any;
  submit : BouttonService = new BouttonService('Update');
  private listFiles: any [] = [];

  constructor(
    private formBuilder: FormBuilder,
    private profile: UserServiceService,
    private service : UploadFormsService,
    private router: Router
  ) { }

  ngOnInit() {

    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem(this.profile.authKey));
    this.profileForm = this.formBuilder.group({
      name: this.user.name,
      email: this.user.email,
      password: this.user.password,
      phone: this.user.phone,
      address: this.user.address,
      city: this.user.city,
      country: this.user.country,
      zipCode: this.user.zipCode,
      Lastname: this.user.Lastname,
      description: this.user.description,
      imageAvatar: this.user.imageAvatar
    })

  }

  receiveFileData($event: {id: string; fileData$: File}) {
    this.listFiles.push($event);

  }

  onSubmit() {

    this.service.uploadImages(this.listFiles, 'profiles', this.profileForm).subscribe(
      (form) => {
        // @ts-ignore
        this.service.PostForm(form , '/user/update/' + this.user.id).subscribe(
          () =>{

            this.router.navigateByUrl('profile')
          }

        )
      }
    )

    // @ts-ignore


  }

  ReciveFileData($event: { id: string; fileData$: File }) {

    this.listFiles.push($event);

  }
}
