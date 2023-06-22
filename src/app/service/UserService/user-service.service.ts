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


  public authKey= "profile";

  private _AuthToken! : UserModel ;

  isAuth: boolean = false;
  getAuthKey(): string {
    return this.authKey;
  }
  get AuthToken(): UserModel {
    return this._AuthToken;
  }

  constructor(
    private router : Router,
    private http : HttpClient
  ) { }


  RegisterService(mtForm : FormGroup) : Observable<any> {
    return new Observable<any>(subscriber => {


        this.http.post(environement + "/user/register", mtForm.value).subscribe(
          (data) => {
            console.log('response', data);
            localStorage.setItem(this.authKey, JSON.stringify(data));

            console.log("my token ...",localStorage.getItem(this.authKey))

            subscriber.next(data)
            subscriber.complete();

            this.isAuth=true
          }
        )
      }
    );

  }

  getAlluser() : Observable<UserModel[]>{
    // @ts-ignore
    return this.http.get(environement+"/user/all")
  }

  login(mtForm : FormGroup) : Observable<boolean> {
    return new Observable<any>(
      (subscriber) =>{
        this.http.post(environement+"/user/login", mtForm.value).subscribe(
          (data) => {
            console.log('response', data);
            localStorage.setItem(this.authKey, JSON.stringify(data));

            if(data !=null){
              this.isAuth=true
              subscriber.next(this.isAuth)
              subscriber.complete()
            }else {
              this.isAuth=false
              subscriber.next(this.isAuth)
              subscriber.complete()
            }
          }
        )
      }

    );
  }

  singOut() {
    localStorage.removeItem(this.authKey);
    this.isAuth=false
    this.router.navigateByUrl('login')
  }
}

export class UserModel{
  constructor(
    public id : string,
    public email : string,
    public password : string,
    public role : string,
    public imageAvatar : string,
    public name : string,
    public description : string,
    public phone : string,
    public address : string,
    public city : string,
    public country : string,
    public zipCode : string,
    public Lastname : string,
    public Status :string

  ) {
  }
}
