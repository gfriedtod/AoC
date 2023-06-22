import {Component, Inject} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProjectModel} from "../../model/ProjectModel";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {UploadFormsService} from "../../service/forms-service/upload-forms.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-project-form',
  templateUrl: './add-project-form.component.html',
  styleUrls: ['./add-project-form.component.scss']
})
export class AddProjectFormComponent {
  public projectForm!: FormGroup;
  public project!: ProjectModel;
  filesData: any[] = [];

  // @ts-ignore
  constructor(private formBuilder: FormBuilder , @Inject(MAT_DIALOG_DATA)
              private data: ProjectModel ,
              private service : UploadFormsService,
              private router : Router ) { }

  ngOnInit() {
    this.projectForm = this.formBuilder.group({
      name: [this.data.name, Validators.required],
      contexte: [ this.data.contexte, Validators.required],
      but: [ this.data.but, Validators.required],
      justification: [ this.data.justification, Validators.required],
      apportLocal: [ this.data.apportLocal, Validators.required],
      devis: [this.data.devis, Validators.required],
      planning: [this.data.planning, Validators.required],
      location: [this.data.location, Validators.required],
      country: [this.data.country, Validators.required],
      start: [this.data.start, Validators.required],
      end: [this.data.end, Validators.required],
      userId: [this.data.userId, Validators.required],
      beneficiary: [this.data.beneficiary, Validators.required],
      result: [ this.data.result, Validators.required],
      impact: [ this.data.impact, Validators.required],
      imageUrl: [ this.data.imageUrl, Validators.required],
      objectif : [ this.data.objectif, Validators.required],
      image1: ['', Validators.required],
      image2: ['', Validators.required],
      image3: ['', Validators.required],
      image4: ['', Validators.required],
      image5: ['', Validators.required],
      oeuvre : [this.data.oeuvre, Validators.required],
      Status : ['validate', Validators.required],
    });
  }

  public onSubmit() {
   this.service.uploadImages(this.filesData , 'project', this.projectForm).subscribe(
     (data) => {
       this.service.PostForm(data, `/project/update/${this.data.id}`).subscribe(
         (data) => {
           this.router.navigateByUrl('home');
         }
       )
     }
   )
  }

  receiveFileData($event: { id: string; fileData$: File }) {
    this.filesData.push($event)

  }
}
