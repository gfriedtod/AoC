import {Component, OnInit} from '@angular/core';
import {BouttonService} from "../../component/boutton/bouttonService/BouttonService";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UploadFormsService} from "../../service/forms-service/upload-forms.service";
import {DateRange, MatCalendar} from "@angular/material/datepicker";
import {push} from "@angular/fire/database";
import {Router} from "@angular/router";
import {UserModel, UserServiceService} from "../../service/UserService/user-service.service";

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

  constructor(private formBuilder: FormBuilder , private service : UploadFormsService , private router : Router , private  profile :UserServiceService) {}

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
    });
  }



  selectedDates!: { start: any; end: any };
  selection: any[]=[];

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
