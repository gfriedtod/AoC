import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bureau-devellopemt-website-aoc';
  private colorchange!: boolean;

  colorChange() {
    this.colorchange= true;
    console.log("call")
  }

  ngOnInit(): void {

    this.colorchange=false
  }
}
