import {Component, Input, OnInit} from '@angular/core';
import {WorkingModel, WorkModel} from "./project-intro/WorkModel/WorkModel";
import {IdentityModel} from "./identity-work/identyModel/identityModel";
import {
  CardProjectPresentationModel
} from "../../component/card-project-presentation/CardProjectPresentationModel/CardProjectPresentationModel";
import {MissionWork} from "./mission-project/MissionWork/MissionWork";
import {CardProModel} from "../../component/card-pro/CardProModel/CardProModel";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {ActivatedRoute, Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {delay, map, Observable} from "rxjs";
import {WorksModel} from "./model/WorksModel";
import {PAUSE} from "@angular/cdk/keycodes";

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.scss',
  './loading.scss']
})
export class ProjectPageComponent implements  OnInit {

 project!: WorkingModel;
  identity!: IdentityModel;
  cardpresentation!: CardProjectPresentationModel ;
  mission!: MissionWork;
  cardPro!: CardProModel[] ;
  subList!: CardProModel[];

  number: number = 8;

  decrement : boolean = false;

  seemore!:BouttonService
  seeless!:BouttonService
  cardpresentationmission!: CardProjectPresentationModel;
  cardpresentationproject!: CardProjectPresentationModel;
  Works! : Observable<WorksModel>
   work!: Observable<WorksModel>;
  view: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {

    // @ts-ignore
    this.Works =this.http.get( `http://localhost:8080/api/works/${this.route.snapshot.params['id']}`)

    this.work = this.Works.pipe(
      map(
        data => data
      )
    )


    this.work.subscribe(async data => {



        //  console.log("project nameeeeeeeeeeee",this.project.name)
        this.identity = new IdentityModel(data.image2, data.identitytitle, data.identitydescription);
        this.mission = new MissionWork(data.missiontitle, data.image3, data.missiondescription, data.image4);
        this.project = new WorkingModel(data.title, data.objectif, data.image1)

      this.view =true

      }
    )
    this.cardpresentationproject = new  CardProjectPresentationModel('assets/project-project.gif','Project','');

    this.cardpresentationmission = new  CardProjectPresentationModel('assets/project-mission.gif','Mission','');
    this.cardpresentation = new CardProjectPresentationModel( 'assets/project-identity.gif','Project','');

    this.cardPro = [
    ]
    this.seemore=new BouttonService( 'see more', )
    this.seeless=new BouttonService( 'see less', )
    this.subList = this.cardPro.slice( 0, this.number);


  }

  increment() {
    // @ts-ignore
    this.subList = this.cardPro.slice(0,this.number+4);
    this.number+=4;
    console.log("ok");
    this.number >4 ? this.decrement = true : this.decrement = false
  }

  dicrement() {
    // @ts-ignore
    this.subList = this.subList.slice(0,this.number-4);
    this.number-=4;
    this.number >8 ? this.decrement = true : this.decrement = false
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
