import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environement} from "../../../Environement";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ChronoServiceService {

  constructor( private  http : HttpClient ) { }

  getAllcgrono(): Observable<any>{

    return new Observable<any>(
      (observer)=>{
        this.http.get(`${environement}/chrono/all`).subscribe(
          (data:any)=>{
            observer.next(data)
          }
        )
      }
    )
  }
}
