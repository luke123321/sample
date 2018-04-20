import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
    selector: '.app-main-nav-item',
    templateUrl: './nav-item.component.html',
    styleUrls: ['./nav-item.component.scss']
})
export class NavItemComponent implements OnInit {

    @Input() link: string = '/';

    @Input() icon: string = '';

    @Input() title: string = '';

    constructor() { }

    ngOnInit() { }

}
