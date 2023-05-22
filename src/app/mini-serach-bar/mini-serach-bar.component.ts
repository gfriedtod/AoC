import {Component, OnInit} from '@angular/core';
import {BouttonService} from "../boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-mini-serach-bar',
  templateUrl: './mini-serach-bar.component.html',
  styleUrls: ['./mini-serach-bar.component.scss']
})
export class MiniSerachBarComponent implements  OnInit{
  submit!: BouttonService;

  ngOnInit(): void {

    this.submit  = new BouttonService('Search');
  }

}
