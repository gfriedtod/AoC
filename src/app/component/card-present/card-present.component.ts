import {Component, Input, OnInit} from '@angular/core';
import {CountriesMangeModel} from "../countries-manage-card/model/CountriesMangeModel";
import {CountriePageModel} from "../../page/countries-page/model/CountriePageModel";

@Component({
  selector: 'app-card-present',
  templateUrl: './card-present.component.html',
  styleUrls: ['./card-present.component.css']
})
export class CardPresentComponent implements OnInit {


  @Input() cardModel! : CountriePageModel;
  ngOnInit(): void {

    console.log(this.cardModel)

  }
}
