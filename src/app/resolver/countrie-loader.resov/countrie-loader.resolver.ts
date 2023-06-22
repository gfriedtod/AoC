import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import * as http from "http";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {environement} from "../../../Environement";

@Injectable()
export class countrieLoaderResolver implements Resolve<any> {

  constructor(private  http: HttpClient) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.http.get(environement+"/countries-card/all");
  }

};
