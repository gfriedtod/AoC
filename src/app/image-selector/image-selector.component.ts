import {Component, Input, OnInit} from '@angular/core';
import {HttpClient, HttpEventType} from "@angular/common/http";
import {finalize, Subscription} from "rxjs";

@Component({
  selector: 'app-image-selector',
  templateUrl: './image-selector.component.html',
  styleUrls: ['./image-selector.component.scss']
})
export class ImageSelectorComponent implements  OnInit{


  @Input()
  requiredFileType!:string;

   fileName: string= "";
   uploadSub!: Subscription;
 uploadProgress!: number;
  constructor(private  http: HttpClient) {}


  ngOnInit() {

  }
  onFileSelected(event:any) {
console.log(true)
    const file:File = event.target.files[0];

    console.log("file"+file.name)

    if (file) {
console.log("okkk")
      this.fileName = file.name;

      const formData = new FormData();

      formData.append("thumbnail", file);

      const upload$ = this.http.post("/api/thumbnail-upload", formData, {
        reportProgress: true,
        observe: 'events'
      })
        .pipe(
          finalize(() => this.reset())
        );

      console.log("okkk")

      this.uploadSub = upload$.subscribe(event => {
        if (event.type == HttpEventType.UploadProgress) {
          // @ts-ignore
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        }
      })
    }
  }

  cancelUpload() {
    this.uploadSub.unsubscribe();
    this.reset();
  }

  reset() {

    this.uploadProgress = 0;
    // this.uploadSub = undefined;
  }
}
