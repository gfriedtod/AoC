import {Component, OnInit} from '@angular/core';
import {BouttonService} from "../boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-sear-bar',
  templateUrl: './sear-bar.component.html',
  styleUrls: ['./sear-bar.component.scss']
})
export class SearBarComponent implements OnInit{

  submit!: BouttonService;

  ngOnInit(){

    this.submit =new BouttonService('Search')
}
}
