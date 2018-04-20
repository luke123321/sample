import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  navFlag: Boolean = true;

  constructor() { }

  ngOnInit() { }

  toggle(flag: Boolean) {
    this.navFlag = flag;
  }

}
