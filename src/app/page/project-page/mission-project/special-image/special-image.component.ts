import {Component, Input} from '@angular/core';
import {SpecialModel} from "./model/SpecialModel";

@Component({
  selector: 'app-special-image',
  templateUrl: './special-image.component.html',
  styleUrls: ['./special-image.component.scss']
})
export class SpecialImageComponent {

  // @ts-ignore
  @Input() SpecialModel! : SpecialModel

  ngOnInit(): void {

  }
}
