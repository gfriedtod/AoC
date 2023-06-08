import {Component, OnInit} from '@angular/core';
import {MissionWork} from "../project-page/mission-project/MissionWork/MissionWork";

@Component({
  selector: 'app-chrono-page',
  templateUrl: './chrono-page.component.html',
  styleUrls: ['./chrono-page.component.scss']
})
export class ChronoPageComponent implements OnInit{
   mission!: MissionWork;
  ngOnInit(): void {

    this.mission = new MissionWork( 'lorem ipsum dolor sit amet, consectetur ', 'assets/building4.jpg','lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure nobis non odio officiis perferendis quae quis quod recusandae veritatis!', 'assets/building1.jpg');

  }

}
