import {Component, Input} from '@angular/core';
import {ProjectModel} from "../../model/ProjectModel";

@Component({
  selector: 'app-project-validator',
  templateUrl: './project-validator.component.html',
  styleUrls: ['./project-validator.component.scss']
})
export class ProjectValidatorComponent {

  @Input() projectModel! : ProjectModel

}
