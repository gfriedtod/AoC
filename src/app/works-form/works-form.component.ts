import {Component, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BouttonService} from "../component/boutton/bouttonService/BouttonService";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {Observable} from "rxjs";

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

  constructor(private fb: FormBuilder , private storage : AngularFireStorage) {}

  get key_list_controls() {
    return this.myForm.get('key_list') as FormArray;
  }
  ngOnInit(): void {

    this.myForm = this.fb.group({
      title: '',
      objectif: '',
      image1:'',
      Identitytitle: '',
      Identitydescription: '',
      image2:'',
      image3:'',
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

  uploadImages(file: any , image_id: string) {
    return new Observable( observer => {
        let image_url;


        // @ts-ignore

        let  task = this.storage.upload("/yourimages/" + file.name, file);
        task.then(snapshot => {



          snapshot.ref.getDownloadURL().then(
            (url) => {
              console.log("url auncher" ,url)
              image_url = url
              // @ts-ignore
              this.myForm.get(image_id).setValue(image_url);
              console.log("value for forms " ,this.myForm.get(image_id)?.value)

            }
          );

        })
      }
    )



  }
  // @ts-ignore

// @ts-ignore




  // @ts-ignore



  onSubmit(): void {




    this.listFiles.forEach((file : any) => {
      console.log("iddddddddddddddddd",file.id)
      this.uploadImages(file.fileData$ , file.id).subscribe(
        observer =>{
          console.log("hey les negors ")
          console.log(this.myForm.value);

          // @ts-ignore
          observer.next()
        }
      )
    })

  }

  receiveFileData( file : {id:string,fileData$:File}) {


    // @ts-ignore
    this.listFiles.push(file)



  }
}
