import {Component, OnInit} from '@angular/core';
import {LoadStateService} from "./service/loadState/load-state.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public  state$! : Observable<boolean>;
  title = 'bureau-devellopemt-website-aoc';
  constructor( public  loades : LoadStateService) {
  }

  ngOnInit(): void {

    this.state$ = this.loades.state$

  }


}
