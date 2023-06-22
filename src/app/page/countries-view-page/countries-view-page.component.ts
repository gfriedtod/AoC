import {Component, OnInit} from '@angular/core';
import {CountriePageModel} from "../countries-page/model/CountriePageModel";
import {map, Observable} from "rxjs";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-countries-view-page',
  templateUrl: './countries-view-page.component.html',
  styleUrls: ['./countries-view-page.components.scss']
})
export class CountriesViewPageComponent implements OnInit{
 card!: CountriePageModel[]
  loades : boolean = false
  constructor( private  route : ActivatedRoute) {
  }
  ngOnInit(){
     this.route.data.subscribe(
     (data) =>{
       console.log(data['card'])
      this.card = data['card'].splice(0,14)
       this.loades= true
     }
   )
   //   .pipe(
   //   map(
   //     (data) =>{
   //       console.log(data['card'])
   //       return data['card']
   //     }
   //   )
   // )
  }
}
