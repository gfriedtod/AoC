import { Injectable } from '@angular/core';
import {async, BehaviorSubject, Observable, Subscriber, tap} from "rxjs";
import {FormGroup} from "@angular/forms";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {HttpClient} from "@angular/common/http";
import {environement} from "../../../Environement";

@Injectable({
  providedIn: 'root'
})
export class UploadFormsService {

  Forms: BehaviorSubject<FormGroup> = new BehaviorSubject<FormGroup>(new FormGroup({}));

 snap: Promise<void> []= [];



  getForms(): Observable<FormGroup> {
    return this.Forms.asObservable()
  }

  constructor(private storage: AngularFireStorage , private http: HttpClient) {
  }

  // uploadImages(file: { id: string; fileData$: File }[], path: string, myForm: FormGroup) {
  //
  //
  // return new Observable( (subscriber: Subscriber<FormGroup>) => {
  //
  //
  //   file.forEach(
  //     (element: any) => {
  //       let task =this.storage.upload(path + "/" + element.fileData$.name, element.fileData$);
  //
  //
  //       let image_url;
  //
  //       task.then(snapshot => {
  //
  //
  //
  //
  //
  //           snapshot.ref.getDownloadURL().then(
  //             (url) => {
  //               console.log("url auncher", url)
  //               image_url = url
  //               // console.log(element.id)
  //
  //               // @ts-ignore
  //               myForm.get(element.id).setValue(image_url);
  //               subscriber.next(myForm)
  //               subscriber.complete()
  //
  //               // this.Forms.pipe(
  //               //   tap(
  //               //     (form) => {
  //               //
  //               //       console.log("value..............",myForm.value)
  //               //       this.Forms.next(myForm);
  //               //     }
  //               //   )
  //               // )
  //
  //             }
  //           ) .catch(
  //             (error) => {
  //               console.log("internal error ", error)
  //             }
  //
  //         )
  //
  //
  //
  //
  //       })
  //
  //
  //
  //       subscriber.complete()
  //
  //
  //
  //     })
  //
  //   // subscriber.next(myForm)
  //   // subscriber.complete()
  //
  // })
  //
  //
  //
  //
  // }

  uploadImages(file: { id: string; fileData$: File }[], path: string, myForm: FormGroup) {
    return new Observable((subscriber: Subscriber<FormGroup>) => {

      const promises = file.map((element: any) => {
        const task = this.storage.upload(path + "/" + element.fileData$.name, element.fileData$);
        return task.then(snapshot => {
          return snapshot.ref.getDownloadURL().then((url) => {
            console.log("url auncher", url)

            myForm.get(element.id)?.setValue(url);
          });
        });
      });

      Promise.all(promises).then(() => {
        subscriber.next(myForm);
        subscriber.complete();
      }).catch((error) => {
        subscriber.error(error);
      });
    });
  }

  PostForm(myForm: FormGroup , path: string) {
   return  this.http.post(environement+path, myForm.value)
  }
}





