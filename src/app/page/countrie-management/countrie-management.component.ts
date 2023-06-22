import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Route, Router} from "@angular/router";
import {map, Observable} from "rxjs";
import {CountriesMangeModel} from "../../component/countries-manage-card/model/CountriesMangeModel";
import {CountriePageModel} from "../countries-page/model/CountriePageModel";

@Component({
  selector: 'app-countrie-management',
  templateUrl: './countrie-management.component.html',
  styleUrls: ['./countrie-management.component.scss']
})
export class CountrieManagementComponent implements OnInit {


  Cards!: Observable<CountriePageModel[]> ;
  constructor( private  route : ActivatedRoute , private  router : Router) {
  }

  ngOnInit (): void {

    this.Cards = this.route.data.pipe(
      map(
        (data) => data['card']
      )
    )

  }


  navigate(card: CountriePageModel) {

    this.router.navigate(["countries"], { state : { countrie: card } });
  }
}
