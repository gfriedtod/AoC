import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-manage',
  templateUrl: './user-manage.component.html',
  styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent implements OnInit{
  ngOnInit(): void {
    console.log("user is intialized")
  }

}
