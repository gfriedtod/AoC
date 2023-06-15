import {Component, Inject, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BouttonService} from "../component/boutton/bouttonService/BouttonService";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UploadFormsService} from "../service/forms-service/upload-forms.service";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Component({
  selector: 'app-works-form',
  templateUrl: './works-form.component.html',
  styleUrls: ['./works-form.component.scss']
})
export class WorksFormComponent implements  OnInit{
  myForm!: FormGroup;
  key_list!: FormArray;
  addboutton: BouttonService = new BouttonService('+add key');
  listFiles = [];



  // @ts-ignore

  constructor( private fb: FormBuilder ,
               private http : HttpClient,
               private storage : AngularFireStorage ,
               @Inject(MAT_DIALOG_DATA) private data : any ,
               private service : UploadFormsService,
               private route : Router
  ) {}



  get key_list_controls() {
    return this.myForm.get('key_list') as FormArray;
  }
  ngOnInit(): void {

    this.myForm = this.fb.group({
      pageId: `${this.data.id}`,
      title: '',
      objectif: '',
      image1:'',
      Identitytitle: '',
      Identitydescription: '',
      Missiontitle: '',
      Missiondescription: '',
      image2:'',
      image3:'',
      image4:'',
      position:'',
      key_list: this.fb.array([]),
    });
    this.key_list = this.myForm.get('key_list') as FormArray;

  }

  addKey(): void {
    // @ts-ignore


    this.key_list = this.myForm.get('key_list') as FormArray;

    this.key_list.push(this.fb.group({
      keyS:this.fb.control('' , Validators.required),
      keyS_description:this.fb.control('' , Validators.required)
    }));
    //   console.log(this.key_list.at(0))

    // @ts-ignore


    // @ts-ignore
  }

  // uploadImages(file: any , image_id: string) {
  //
  //
  //   return new Observable( observer => {
  //       let image_url;
  //
  //
  //       // @ts-ignore
  //
  //       let  task = this.storage.upload("/yourimages/" + file.name, file);
  //       task.then(snapshot => {
  //
  //
  //
  //         snapshot.ref.getDownloadURL().then(
  //           (url) => {
  //             console.log("url auncher" ,url)
  //             image_url = url
  //             // @ts-ignore
  //             this.myForm.get(image_id).setValue(image_url);
  //             console.log("value for forms " ,this.myForm.get(image_id)?.value)
  //
  //           }
  //         );
  //
  //       })
  //     }
  //   )
  //
  //
  //
  // }
  // @ts-ignore

// @ts-ignore




  // @ts-ignore



  async onSubmit(): void {


    let task = await this.service.uploadImages(this.listFiles, 'countries', this.myForm)
    console.log(this.myForm.value)
    task.subscribe(
      async (form) => {
        console.log("enter")
        console.log("value..............", form.value)
        await this.service.PostForm(this.myForm , "/works/create/works").subscribe(
          (data) => {
            console.log(data)


            this.route.navigateByUrl('countries-manage');

          }
        )
      }
    )

  }

  receiveFileData( file : {id:string,fileData$:File}) {


    // @ts-ignore
    this.listFiles.push(file)



  }
}
