import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Observable} from "rxjs";
import {UserServiceService} from "../UserService/user-service.service";
import {Injectable} from "@angular/core";

@Injectable()
export class doGuardGuard implements CanActivate {

  constructor(private userService: UserServiceService , private router: Router) {
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // @ts-ignore
    if(this.userService.Do){
      return true
    }else{
      this.router.navigateByUrl('login')
      return false
    }
  }

};
