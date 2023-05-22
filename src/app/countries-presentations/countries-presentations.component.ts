import {Component, OnInit} from '@angular/core';
import {BouttonService} from "../boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-countries-presentations',
  templateUrl: './countries-presentations.component.html',
  styleUrls: ['./countries-presentations.component.scss']
})
export class CountriesPresentationsComponent implements OnInit{

 stateviews! : BouttonService
  ngOnInit(): void {

   this.stateviews =new BouttonService('100')
  }

}
