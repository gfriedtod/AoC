import {Component, Input} from '@angular/core';
import {BouttonIconModel} from "./model/BouttonIconModel";

@Component({
  selector: 'app-boutton-icon',
  templateUrl: './boutton-icon.component.html',
  styleUrls: ['./boutton-icon.component.scss']
})
export class BouttonIconComponent {
  @Input() bouttonIconModel! : BouttonIconModel;


}
