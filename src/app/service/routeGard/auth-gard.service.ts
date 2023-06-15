import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {UserServiceService} from "../UserService/user-service.service";

@Injectable()
export class AuthGardService implements CanActivate{

  constructor( private  auth : UserServiceService , private  router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(this.auth.isAuth){
      return true
    }else{
      this.router.navigateByUrl('login')
      return false
    }

  }
}
