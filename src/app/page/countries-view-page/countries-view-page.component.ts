import {Component, OnInit} from '@angular/core';
import {CountriePageModel} from "../countries-page/model/CountriePageModel";

import {ActivatedRoute, Router} from "@angular/router";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-countries-view-page',
  templateUrl: './countries-view-page.component.html',
  styleUrls: ['./countries-view-page.components.scss']
})
export class CountriesViewPageComponent implements OnInit{
 card!: CountriePageModel[]
  loades : boolean = false
  constructor( private  route : ActivatedRoute, private router : Router) {
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

  navigate(cadd: CountriePageModel) {
    this.router.navigate(["countries"], { state : { countrie: cadd } });
  }

  onPaginatorChange($event: PageEvent) {
    let  startIndex = $event.pageIndex * $event.pageSize;
    let endIndex = startIndex + $event.pageSize;
    this.card = this.card.slice(startIndex, endIndex);

  }
}
