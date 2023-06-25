import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";

import {UserServiceService} from "../UserService/user-service.service";

@Injectable()
export class AuthGardService implements CanActivate{

  constructor( private  auth : UserServiceService , private  router : Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
    if(localStorage.getItem(this.auth.authKey)!= null){
      return true
    }else{
      this.router.navigateByUrl('login')
      return false
    }

  }
}
