import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: '.app-main-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

    navFlag: Boolean = true;

    @Output() onClick = new EventEmitter<Boolean>();

    constructor() { }

    ngOnInit() { }

    toggleNav() {
        this.navFlag = !this.navFlag;
        this.onClick.emit(this.navFlag);
    }

}
