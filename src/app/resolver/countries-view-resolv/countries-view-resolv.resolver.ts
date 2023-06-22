import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {HttpClient} from "@angular/common/http";
import {environement} from "../../../Environement";
import {Injectable} from "@angular/core";

@Injectable()
export class countriesViewResolvResolver implements  Resolve<any> {
  constructor(private http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.http.get(environement + "/countries/all");
  }
}
