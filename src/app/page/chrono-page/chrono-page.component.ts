import {Component, OnInit} from '@angular/core';
import {MissionWork} from "../project-page/mission-project/MissionWork/MissionWork";
import {ChronoServiceService} from "../../service/chrono/chrono-service.service";
import {map, Observable} from "rxjs";
import {ChronoModel} from "./chrono-jesuite/model/ChronoModel";

@Component({
  selector: 'app-chrono-page',
  templateUrl: './chrono-page.component.html',
  styleUrls: ['./chrono-page.component.scss']
})
export class ChronoPageComponent implements OnInit{
   mission!: MissionWork;
  myjesuites!: ChronoModel[] ;
  loades : boolean = false ;

  constructor(
    private service :ChronoServiceService
  ) {
  }
  ngOnInit(): void {

 this.service.getAllcgrono().subscribe(
   (data:ChronoModel[])=>{
     console.log(data)
     this.myjesuites = data
     this.loades = true
   }
 )

    this.mission = new MissionWork( 'lorem ipsum dolor sit amet, consectetur ', 'assets/building4.jpg','lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iure nobis non odio officiis perferendis quae quis quod recusandae veritatis!', 'assets/building1.jpg');

  }

}
