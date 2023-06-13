import {ActivatedRouteSnapshot, Resolve, ResolveFn, RouterStateSnapshot} from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";

export class countriePageResolver implements Resolve<any> {
  constructor(
    private http : HttpClient
  ) {
  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {

    return this.http.get('http://localhost:8080/api/countries/' + route.paramMap.get('id'));

  }


};
