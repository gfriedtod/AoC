import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {finalize, observable, Observable, Subscription} from "rxjs";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {AngularFireStorage, AngularFireStorageModule, AngularFireUploadTask} from "@angular/fire/compat/storage";
import {error} from "@angular/compiler-cli/src/transformers/util";
import {MatDialog} from "@angular/material/dialog";
import {CountrieMakerComponent} from "../countrie-maker/countrie-maker.component";
import {TestCardComponent} from "../../test-card/test-card.component";
import {TestCardModel} from "../../test-card/test-card.model/TestCardModel";
import {ChronoFormComponent} from "../../component/chrono-form/chrono-form.component";
import {Element} from "../work-director-manage/work-director-manage.component";
import {UserModel, UserServiceService} from "../../service/UserService/user-service.service";
import {AddUserFormComponent} from "../../component/add-user-form/add-user-form.component";
import {PageEvent} from "@angular/material/paginator";
import {MatButtonToggleChange} from "@angular/material/button-toggle";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent  implements OnInit{

  dialog: BouttonService = new BouttonService('+add key');
  // @ts-ignore
  card : TestCardModel=new TestCardModel('countries',
    'red',
    // @ts-ignore
    CountrieMakerComponent);

  // @ts-ignore
  card2 : TestCardModel=new TestCardModel('chronologie', 'red',ChronoFormComponent)

  ELEMENT_DATA: UserModel [] = [];
  displayedColumns: string[] = ['image', 'name', 'email', 'statut' ,'role'];

  loaded: boolean = true;
 dataSource!: UserModel[];
  statut!: FormGroup;
  constructor(private  dial: MatDialog , private  userService: UserServiceService,
              private  fb : FormBuilder, private http : HttpClient

  ) {}


  ngOnInit(): void {
    // this.http.post('http://localhost:6080/client/login/john.doe@example.com/password123', {
    //   dateDebut:"2023-06-18T19:07:21.200Z",
    //   dateFin:"2023-06-18T19:07:21.200Z",
    //
    // }).subscribe(
    //   (data) => {
    //     console.log("victoire test data " , data)
    //   }
    // )

    this.userService.getAlluser().subscribe(
      (data) => {
        console.log("data", data)
        this.ELEMENT_DATA = data,
          this.dataSource = this.ELEMENT_DATA.slice(0, 5);
        this.loaded =false
      }
    )

    this.statut=this.fb.group({
      statut:['',Validators.required]
    })


  }





  onSubmit(): void {





  }


  openDialog() {
    console.log("open.......")
    // @ts-ignore
    this.dial.open(AddUserFormComponent);
  }

  onPaginatorChange($event: PageEvent) {

   let  startIndex = $event.pageIndex * $event.pageSize;
   let endIndex = startIndex + $event.pageSize;
   this.dataSource = this.ELEMENT_DATA.slice(startIndex, endIndex);


  }

  onToggle($event: MatButtonToggleChange) {
    console.log("you toggle me " , $event)

  }
}
