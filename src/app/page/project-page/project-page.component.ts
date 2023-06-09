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
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {delay, map, Observable} from "rxjs";
import {WorksModel} from "./model/WorksModel";
import {PAUSE} from "@angular/cdk/keycodes";
import {environement} from "../../../Environement";
import {ProjectModel} from "../../model/ProjectModel";

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
  cardPro!: ProjectModel[] ;
  subList!: ProjectModel[];

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
    this.Works =this.http.get( environement+'/works/'+this.route.snapshot.params['id'] ,  )

    this.work = this.Works.pipe(
      map(
        data =>{
          console.log("the data ",data)
          return data
        }
      )
    )
    const headers = new HttpHeaders().set('Access-Control-Allow-Origin', '*');
    this.http.get<ProjectModel[]>(environement+'/project/works/'+this.route.snapshot.params['id'],{headers: headers}).subscribe(
      res =>{
        this.cardPro = res
          this.subList = this.cardPro.slice( 0, this.number);

      }
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

    this.seemore=new BouttonService( 'see more', )
    this.seeless=new BouttonService( 'see less', )



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

  navigate(card: ProjectModel) {
    this.router.navigate(["project"], { state : { projectData: card } });
  }
}
