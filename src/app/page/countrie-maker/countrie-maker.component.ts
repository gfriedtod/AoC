import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {MatDialog} from "@angular/material/dialog";
import {WorksFormComponent} from "../../works-form/works-form.component";
import {UploadFormsService} from "../../service/forms-service/upload-forms.service";
import {HttpClient} from "@angular/common/http";
import {Observable, Subscriber, tap} from "rxjs";

// @ts-ignore
@Component({
  selector: 'app-countrie-maker',
  templateUrl: './countrie-maker.component.html',
  styleUrls: ['./countrie-maker.component.scss']
})
export class CountrieMakerComponent implements OnInit {
  private listFiles: { id: string; fileData$: File }[] = [];

  constructor(
    private  dial: MatDialog,
    private  service : UploadFormsService,
    private http : HttpClient,
    private form : FormBuilder
  ) {
  }


  Countrieform: FormGroup =this.form.group(
    {
      Name:   this.form.control('',   ),
      Description:   this.form.control('',   ),

      //genere moi les differents controls pour un pays capitale etc...
      Countries:   this.form.control('hey',   ),
      Capitale:   this.form.control('',   ),
      Population:   this.form.control('',   ),
      Regions:   this.form.control('',   ),
      PNB:   this.form.control('',   ),
      Esp:   this.form.control('',   ),
      Pvilles:   this.form.control('',   ),
      area:   this.form.control('',   ),
      image1:   this.form.control('',   ),
      image2:   this.form.control('',   ),
      image3:   this.form.control('',   ),
      image4:   this.form.control('',   ),
      image5:   this.form.control('',   ),
      Superficie:   this.form.control('',   ),
      Religions:   this.form.control('',   ),
      Statut:   this.form.control('',   ),
      Description1:   this.form.control('',   ),
      Description2:   this.form.control('',   ),

    }
  );
  dialog: BouttonService = new BouttonService('+add key');

ngOnInit() {

}

  openDialog(): void {

    this.dial.open(WorksFormComponent);
  }

  receiveFileData($event: { id: string; fileData$: File }) {


    this.listFiles.push($event);




  }




  async onSubmit() {


    let task = await this.service.uploadImages(this.listFiles, 'countries', this.Countrieform)
    console.log(this.Countrieform.value)
    task.subscribe(
      async (form) => {
        console.log("enter")
        console.log("value..............", form.value)
        await this.http.post('http://localhost:8080/api/countries/create/countries', form.value).subscribe(
          (data) => {
            console.log(data)
          }
        )
      }
    )

  }


}
