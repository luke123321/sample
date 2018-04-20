import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: '.app-main-form-item',
    templateUrl: './form-item.component.html',
    styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

    @Input() type: String;

    constructor() { }

    ngOnInit() { }

}
