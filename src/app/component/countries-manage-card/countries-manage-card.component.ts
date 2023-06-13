import {Component, Injectable, Input, OnInit} from '@angular/core';
import {CountriesMangeModel} from "./model/CountriesMangeModel";



@Component({
  selector: 'app-countries-manage-card',
  templateUrl: './countries-manage-card.component.html',
  styleUrls: [
     "countries-manage-card.component.scss"
  ]
})
export class CountriesManageCardComponent implements  OnInit{
   title!: string;
   imageUrl!: string;
   population!: string;
   capital!: string;
   currency!: string;

@Input() card! : CountriesMangeModel

  ngOnInit(): void {

    this.title = this.card.title;
    this.imageUrl = this.card.imageUrl;
    this.population = this.card.population;
    this.capital = this.card.capital;
    this.currency = this.card.currency;
  }
}
