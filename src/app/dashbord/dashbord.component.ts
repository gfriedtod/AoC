import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {finalize, Subscription} from "rxjs";
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {BouttonService} from "../component/boutton/bouttonService/BouttonService";

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.scss']
})
export class DashbordComponent  implements OnInit{
 // fileName!: string;
 //
 //  myForm!: FormGroup;
 //  key_list!: FormArray;
 //  addboutton: BouttonService = new BouttonService('+add key');
 //
 //  constructor(private fb: FormBuilder) { }
 //
 //  ngOnInit() {
 //
 //    this.myForm = this.fb.group({
 //      title: ['', Validators.required],
 //      objectif: [''],
 //      Identitytitle: ['', Validators.required],
 //      Identitydescription: [''],
 //      mission_title: [''],
 //      mission_description: [''],
 //      key_list: this.fb.array([]),
 //    });
 //
 //
 //
 //  }
 //
 //  addKey() {
 //
 //    console.log(this.key_list)
 //
 //    if (this.key_list === undefined) {
 //      this.key_list = this.myForm.get('key_list') as FormArray;
 //    }else {
 //      this.key_list.push(this.fb.group({
 //        key: ['', Validators.required],
 //        key_description: ['']
 //      }));
 //    }
 //
 //  }
 //  onSubmit() {
 //    if (this.myForm.invalid) {
 //      return;
 //    }
 //
 //    const formData = this.myForm.value;
 //    console.log(formData);
 //  }

  myForm!: FormGroup;
  key_list!: FormArray;
  addboutton: BouttonService = new BouttonService('+add key');

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: '',
      Identitytitle: '',
      Identitydescription: '',
      key_list: this.fb.array([]),
    });
  }

  addKey(): void {
    this.key_list = this.myForm.get('key_list') as FormArray;
    this.key_list.push(this.fb.group({
      key: '',
      key_description: '',
    }));

    console.log('myForm after:', this.myForm.value);
  }

  onSubmit(): void {
    console.log(this.myForm.value);
  }
}
