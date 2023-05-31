import {Component, Input} from '@angular/core';
import {IdentityModel} from "./identyModel/identityModel";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-identity-work',
  templateUrl: './identity-work.component.html',
  styleUrls: ['./identity-work.component.scss']
})
export class IdentityWorkComponent {
  contexte: any;
  image: any;
  name: any;

  @Input() Identity! : IdentityModel;
  stateview!: BouttonService;

  ngOnInit() {
    this.stateview = new BouttonService( 'About us');
    this.contexte = this.Identity.contexte
    this.image = this.Identity.image;
    this.name = this.Identity.name;
    }
}
