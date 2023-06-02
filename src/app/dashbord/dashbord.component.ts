import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {finalize, Subscription} from "rxjs";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent {
 // fileName!: string;

 uploadProgress!: number;
  mcontrol: any =new FormControl();



}
