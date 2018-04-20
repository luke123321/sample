import { Component, OnInit } from '@angular/core';

@Component({
    selector: '.app-main-tool-bar',
    templateUrl: './tool-bar.component.html',
    styleUrls: ['./tool-bar.component.scss']
})
export class ToolBarComponent implements OnInit {

    flag: Boolean = false;

    constructor() { }

    ngOnInit() { }

    toggle() {
        this.flag = !this.flag;
    }

}
