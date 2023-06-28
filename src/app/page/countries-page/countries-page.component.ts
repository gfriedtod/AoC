import {Component, OnInit} from '@angular/core';
import {CardProModel} from "../../component/card-pro/CardProModel/CardProModel";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {ActivatedRoute, Router} from "@angular/router";
import {CountriePageModel} from "./model/CountriePageModel";
import {map, Observable} from "rxjs";
import {CountriePageService} from "../../service/COuntriePageService/countrie-page.service";
import {MatDialog} from "@angular/material/dialog";
import {WorksFormComponent} from "../../works-form/works-form.component";
import {UserServiceService} from "../../service/UserService/user-service.service";

@Component({
  selector: 'app-countries-page',
  templateUrl: './countries-page.component.html',
  styleUrls: ['./countries-page.component.scss' , './countries-page2.scss']
})
export class CountriesPageComponent implements OnInit{
  public id!: string;
 name!: string;

  constructor(private route : ActivatedRoute , private  router : Router , private countrieService : CountriePageService , private dial : MatDialog ,
              public  user : UserServiceService) {
  }
   seemore!: BouttonService;
   cardPro!: Observable<CardProModel[]>;
   seeless!: BouttonService;
   subList!: Observable<CardProModel[]>;
  number: number= 8;
  decrement: boolean =false;
  count! : string;
  Statut!: string;
  PNB!: string;
  Religions!: string;
  Regions!: string;
  Superficie!: string;
  PV !: string;
  Esp!: string;
  Population!: string;
  Capital!: string;
  Description1!: string;
  Description2!: string;

  countries : CountriePageModel[]=[];
  image1!: string;
  image2!: string;
  image3!: string;
  image4!: string;
  image5!: string;

  ngOnInit() {
//this.countries = this.countrieService.gtCountrieById(this.route.snapshot.params['id'])
    this.countries.push(history.state.countrie);
    this.countries.map(

      (data) => {
        console.log("ok")
        this.id = data.id;
        console.log(this.id)
        this.Statut = data.statut;
        this.PNB = data.pnb;
        this.Religions = data.Religions;
        this.count = data.statut

        this.Regions = data.Regions;
        console.log(this.Capital)
        this.Superficie = data.superficie;
        this.PV = data.pvilles;
        this.Esp = data.esp;
        this.Population = data.population;
        this.Capital = data.capitale;
        this.Description1 = data.description1;
        this.Description2 = data.description2;
        this.image1 = data.image1;
        this.image2 = data.image2;
        this.image3 = data.image3;
        this.image4 = data.image4;
        this.image5 = data.image5;
        this.name = data.countries


        this.cardPro = this.countrieService.getCardProById(this.id)
        // this.cardPro.subscribe(
        //   (data) => {
        //     console.log(data.length)
        //   }
        // )


        this.subList = this.cardPro.pipe(
          map(
            (data) => {
              console.log("idddddddd",data[0].workId)

              return data

            }
          )
        )

        console.log(this.subList)
      }
    )


    console.log(this.id)



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

  protected readonly status = status;
  addmore: BouttonService = new BouttonService( 'add more', );

  onAdd() {


    this.dial.open(WorksFormComponent , {
      data: {
        id: this.id
      }
    })
  }

  WorkRoute(index : number) {

    //console.log("id", index)

    this.subList.subscribe(
      (data) => {
        console.log("iddd",data[index].workId)
        this.router.navigate(['/works', data[index].workId])
      }
    )
    //

  }
}
