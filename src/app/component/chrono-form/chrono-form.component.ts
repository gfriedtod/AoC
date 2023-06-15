import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {DateAdapter} from "@angular/material/core";
import {MatDateRangeInput} from "@angular/material/datepicker";
import {UploadFormsService} from "../../service/forms-service/upload-forms.service";
import {BouttonService} from "../boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-chrono-form',
  templateUrl: './chrono-form.component.html',
  styleUrls: ['./chrono-form.component.scss']
})
export class ChronoFormComponent implements OnInit {
  form!: FormGroup;
  private dateRange: any;
  listFiles: any[] = [];
  submit: BouttonService = new BouttonService('Submit');

  constructor(private fb: FormBuilder, private adapter: DateAdapter<Date> , private service: UploadFormsService) {

  }

  ngOnInit() {
    this.form = this.fb.group({
     start: ['', Validators.required],
     end: ['', Validators.required],
      name: ['', Validators.required],
      imageAvatar: [''],
      description: ['']
    });
  }



  onSubmit(){

this.service.uploadImages(this.listFiles ,"chronoimage" ,this.form).subscribe(
      (event: any) => {
        this.service.PostForm(this.form ,"/chrono/save").subscribe(
          (event: any) => {
            console.log(event)
          });
      }
    )

  }

  reciveFile($event: { id: string; fileData$: File }) {


    this.listFiles.push($event);

  }




}
