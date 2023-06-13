import {Component, OnInit} from '@angular/core';
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {FormBuilder} from "@angular/forms";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  constructor(
    private form : FormBuilder
  ) {
  }
  loginForm!: any;
  loginBoutton: BouttonService = new BouttonService('login');

  onSubmit() {

  }

  ngOnInit(): void {

    this.loginForm = this.form.group({
      email: '',
      password: '',
      role: ''
    })
  }
}
