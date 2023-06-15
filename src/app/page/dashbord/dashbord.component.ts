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

  constructor(private  dial: MatDialog) {}


  ngOnInit(): void {


  }





  onSubmit(): void {





  }


}
