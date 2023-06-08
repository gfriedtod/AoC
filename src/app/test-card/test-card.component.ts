import {Component, Input} from '@angular/core';
import {BouttonService} from "../component/boutton/bouttonService/BouttonService";
import {TestCardModel} from "./test-card.model/TestCardModel";
import {CountrieMakerComponent} from "../page/countrie-maker/countrie-maker.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-test-card',
  templateUrl: './test-card.component.html',
  styleUrls: ['./test-card.component.scss']
})
export class TestCardComponent {
  dialog : BouttonService = new BouttonService('+add ' , false);
  @Input() TestCardModel!: TestCardModel;
  title!: string;
  color!: string;

constructor(private  dial: MatDialog) {}

  ngOnInit(): void {
    this.title = this.TestCardModel.title;
    this.color = this.TestCardModel.color;
  }
  openDialog(): void {
    console.log("open.......")
    // @ts-ignore
    this.dial.open(this.TestCardModel.component);
  }


}
