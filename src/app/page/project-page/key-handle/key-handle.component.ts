import {Component, Input, OnInit} from '@angular/core';
import {HandleKeyModel} from "./HandleKeyModel/HandleKeyModel";

@Component({
  selector: 'app-key-handle',
  templateUrl: './key-handle.component.html',
  styleUrls: ['./key-handle.component.scss']
})
export class KeyHandleComponent implements OnInit{
  @Input() HandleKeyModel!: HandleKeyModel;
  key!: string;
  description!: string;


  ngOnInit(): void {

    this.key = this.HandleKeyModel.key;
    this.description = this.HandleKeyModel.description;
  }

}
