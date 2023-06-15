import { Component } from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {PayPalScriptService} from "ngx-paypal";
import {UploadFormsService} from "../../service/forms-service/upload-forms.service";
import {UserServiceService} from "../../service/UserService/user-service.service";
import {Router} from "@angular/router";

``
@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.scss']
})
export class SignUpPageComponent { // @ts-ignore
  listFiles: { id: string; fileData$: File }[] = [];
  constructor(
    private service: UploadFormsService,
  private form : FormBuilder,
  private paypal: PayPalScriptService,
    private UserService: UserServiceService,
    private route: Router
) {
}
  loginForm!: any;
  loginBoutton: BouttonService = new BouttonService('Sing up');
  registerBoutton: BouttonService = new BouttonService('register');



  ngOnInit(): void {

    this.loginForm = this.form.group({
      email: '',
      password: '',
      role: '',
      imageAvatar: 'https://www.pngmart.com/files/22/User-Avatar-Profile-Download-PNG-Isolated-Image.png',
      name: '',
      description: '',
    })
  }

  payement() {



  }

  ReciveFileData($event: { id: string; fileData$: File }) {

    this.listFiles.push($event);

  }

  async onSubmit() {
    let task = await this.service.uploadImages(this.listFiles, 'countries', this.loginForm)
    console.log(this.loginForm.value)
    task.subscribe(
      async (form) => {
        console.log("enter")
        console.log("value..............", form.value)
        await this.UserService.RegisterService(form).subscribe(
          (data) => {
            console.log(data)


            this.route.navigateByUrl('home');

          }
        )
      }
    )

  }
}
