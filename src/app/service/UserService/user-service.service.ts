import { Injectable } from '@angular/core';
import {Route, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {environement} from "../../../Environement";
import {Observable} from "rxjs";
import {FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(
    private router : Router,
    private http : HttpClient
  ) { }

  RegisterService(mtForm : FormGroup) : Observable<any> {
    return this.http.post(environement+"/user/register", mtForm.value);

  }
}
