import {Component, Input, OnInit} from '@angular/core';
import {start} from "repl";
import {ChronoModel} from "./model/ChronoModel";

@Component({
  selector: 'app-chrono-jesuite',
  templateUrl: './chrono-jesuite.component.html',
  styleUrls: ['./chrono-jesuite.component.scss']
})
export class ChronoJesuiteComponent implements  OnInit{

  start: any ;
  end: any;
  name: any;
  description: any;
  iamgeAvatar: any;
  @Input() chronoModel! : ChronoModel

  ngOnInit(){

    this.name = this.chronoModel.name
    this.description = this.chronoModel.description
    this.end = this.chronoModel.end
    this.start = this.chronoModel.start
    this.iamgeAvatar = this.chronoModel.imageAvatar

  }
}
