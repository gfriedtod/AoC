import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environement} from "../../../Environement";

@Injectable({
  providedIn: 'root'
})
export class CountriePageService {
  constructor(
    private http : HttpClient
  ) {
  }

  gtCountrieById(id : number) : Observable<any>{
    return this.http.get(environement+"/countries/" + id);
  }

  getCardProById(id: string) : Observable<any>{
    return this.http.get(environement+'/worksCard/' + id);
  }
}
