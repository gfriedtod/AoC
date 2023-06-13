import {Component, Input, OnInit} from '@angular/core';
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {CountriesMangeModel} from "../../component/countries-manage-card/model/CountriesMangeModel";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-countries-presentations',
  templateUrl: './countries-presentations.component.html',
  styleUrls: ['./countries-presentations.component.scss']
})
export class CountriesPresentationsComponent implements OnInit{
  private HomePage_id!: string;

  constructor(
    private  route : ActivatedRoute , private  router : Router
  ) {
  }
 stateviews! : BouttonService


  title!: string;
  imageUrl!: string;
  population!: string;
  capital!: string;
  currency!: string;

  @Input() card! : CountriesMangeModel

  ngOnInit(): void {
    this.stateviews =new BouttonService('100')

    // this.title = this.card.title;
    this.imageUrl = this.card.imageUrl;
    this.population = this.card.population;
    this.capital = this.card.capital;
    this.currency = this.card.currency;
    this.HomePage_id = this.card.page_id
  }
  redirect() {
    this.router.navigateByUrl(`countries/${this.HomePage_id}` );
  }

}
