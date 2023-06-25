import {Component, OnInit} from '@angular/core';
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UploadFormsService} from "../../service/forms-service/upload-forms.service";

import {Router} from "@angular/router";
import {UserModel, UserServiceService} from "../../service/UserService/user-service.service";
import {Observable} from "rxjs";

import {WorksModel} from "../project-page/model/WorksModel";

import {HttpClient} from "@angular/common/http";
import {environement} from "../../../Environement";


export interface Element {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
@Component({
  selector: 'app-work-director-manage',
  templateUrl: './work-director-manage.component.html',
  styleUrls: ['./work-director-manage.component.scss']
})
export class WorkDirectorManageComponent  implements OnInit {
  selected: any ;

  submit : BouttonService = new BouttonService('submit');

  form!: FormGroup;
 ListFile: any []=[];
  dateDebut: Date = new Date();
  dateInvalid: boolean = false;

  user! : UserModel ;

  works$! : Observable<WorksModel[]>
   options: WorksModel[]=[];

  constructor(private formBuilder: FormBuilder , private service : UploadFormsService , private router : Router , private  profile :UserServiceService , private  http : HttpClient) {}

  ngOnInit() {


    // @ts-ignore
    this.user = JSON.parse(localStorage.getItem(this.profile.authKey))
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      contexte: new FormControl('' ,Validators.required),
      but: new FormControl('',Validators.required),
      justification: new FormControl('',Validators.required),
      apportLocal: new FormControl('', Validators.required),
      devis: new FormControl('',Validators.required),
      planning: new FormControl('',Validators.required),
      location: new FormControl('',Validators.required),
      country: new FormControl('',Validators.required),
      start: new FormControl('',Validators.required),
      end: new FormControl('',Validators.required),
      userId : new FormControl(this.user.id ,Validators.required),
      beneficiary : new FormControl('',Validators.required),
      result : new FormControl('',Validators.required),
      impact : new FormControl('',Validators.required),
      imageUrl : new FormControl('/assets/building4.jpg'),
      oeuvre : new FormControl('',Validators.required),
      Status : new FormControl('attend',Validators.required),
    });

    this.form.get('country')?.valueChanges.subscribe(
      (country) => {

        this.http.get<WorksModel[]>(environement+`/app/all/${country}`).subscribe(
          (data) => {

            this.options = data;

          }

        )

      }
    )
  }



  selectedDates!: { start: any; end: any };
  selection: any[]=[];
   // @ts-ignore
  ELEMENT_DATA: Element[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.81, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.011, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.007, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.999, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.998, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.180, symbol: 'Ne'},
  ];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.ELEMENT_DATA;
  // options: Object=['cameroun', 'guimee' ,'tchad'];
  onSelectedChanged(calendar: Date) {

     this.selection.push( calendar);

    if (this.selection.length === 2) {
      this.selectedDates = {start: this.selection[0], end: this.selection[1]};
      console.log(`Intervalle sélectionné : ${this.selectedDates.start} - ${this.selectedDates.end}`);

      this.form.get('start')?.setValue(this.selectedDates.start);


      this.form.get('end')?.setValue(this.selectedDates.end);
      console.log(this.form)
      this.dateInvalid =false

    }else if(this.selection.length > 2){
      this.selection=[]
      this.form.get('start')?.setValue('');
      this.form.get('end')?.setValue('');

      this.dateInvalid =true

    }
  }


  reciveFile($event: {id: string; fileData$: File}) {

    this.ListFile.push($event);

  }




  onSubmit() {
    this.service.uploadImages( this.ListFile , 'work-director-manage', this.form).subscribe(
      (data) => {
        if (data.invalid) {
          console.log(this.form.invalid)
          return;
        }

      else {
          console.log("open..")


          console.log("my data .........", data)
          this.service.PostForm(
            data, '/project/submit'
          ).subscribe(
            () => {
              this.router.navigateByUrl('home')
            }
          );

        }
      }
    );


  }

}
