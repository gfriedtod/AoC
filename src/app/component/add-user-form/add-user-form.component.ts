import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {UploadFormsService} from "../../service/forms-service/upload-forms.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-user-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.components.scss']
})
export class AddUserFormComponent implements  OnInit{
  addDirectorForm!: FormGroup;
  constructor(
    private dialref : MatDialogRef<AddUserFormComponent>,
    private  http: HttpClient , private formBuilder: FormBuilder , private router: Router , private service: UploadFormsService) {
  }

  ngOnInit(): void {
    this.addDirectorForm = this.formBuilder.group({
      email: this.formBuilder.control( '', [Validators.required]),
      password: this.formBuilder.control( '', [Validators.required]),
      statut : this.formBuilder.control( '', [Validators.required]),
    })
  }

  onSubmit(){
    console.log(this.addDirectorForm.value)
    if(this.addDirectorForm.valid){

          this.service.PostForm(this.addDirectorForm ,`/user/admin/save/`+this.addDirectorForm.get('statut')?.value).subscribe(
            (event: any) => {
              this.router.navigateByUrl('dashbord')
              this.dialref.close();

            });
        }

  }



}
