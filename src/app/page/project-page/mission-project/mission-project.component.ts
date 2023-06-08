import {Component, Input, OnInit} from '@angular/core';
import {MissionWork} from "./MissionWork/MissionWork";
import {HandleKeyModel} from "../key-handle/HandleKeyModel/HandleKeyModel";
import {BouttonService} from "../../../component/boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-mission-project',
  templateUrl: './mission-project.component.html',
  styleUrls: ['./mission-project.component.scss']
})
export class MissionProjectComponent implements OnInit{

  @Input() MissionWork!: MissionWork;
  name!: string;
  image!: string;
  mission!: string;
  other!: string;
  keyHand!: HandleKeyModel;
  stateview!: BouttonService;

  ngOnInit(): void {

    this.keyHand = new HandleKeyModel('185k+', 'Lorem ipsum dolor sit amet.');

    this.name = this.MissionWork.name;
    this.image = this.MissionWork.image;
    this.mission = this.MissionWork.mission;
    this.other = this.MissionWork.other;
    this.stateview = new BouttonService('See More');
  }

}
