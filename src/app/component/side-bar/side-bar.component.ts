import {Component} from '@angular/core';
import {BouttonIconModel} from "../boutton-icon/model/BouttonIconModel";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {
  dashborad: BouttonIconModel = new BouttonIconModel('dashboard','dashboard');
  countries: BouttonIconModel = new BouttonIconModel('countries','languages');
  project: BouttonIconModel = new BouttonIconModel('project','polymer');
  home: BouttonIconModel = new BouttonIconModel('home','home');

}
