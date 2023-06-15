import {Component, OnInit} from '@angular/core';
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {FormBuilder} from "@angular/forms";
import {UploadFormsService} from "../../service/forms-service/upload-forms.service";
import {UserServiceService} from "../../service/UserService/user-service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
 showError: boolean = false;
  constructor(
    private form : FormBuilder,
    private service : UploadFormsService,
    private userService : UserServiceService,
    private router : Router
  ) {
  }
  loginForm!: any;
  loginBoutton: BouttonService = new BouttonService('login');

  onSubmit() {
    // @ts-ignore
    this.userService.login(this.loginForm).subscribe(
      (data) => {
        console.log('response', data);
        if(data){
          this.router.navigateByUrl('home');
        }else {
          this.showError = true
        }

      }
    )


  }

  ngOnInit(): void {

    this.loginForm = this.form.group({
      email: '',
      password: '',
      role: '',
      imageAvatar: '',
      name: '',
    })
  }
}
