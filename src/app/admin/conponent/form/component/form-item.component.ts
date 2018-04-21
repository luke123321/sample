import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
@Component({
    selector: '.app-main-form-item',
    templateUrl: './form-item.component.html',
    styleUrls: ['./form-item.component.scss']
})
export class FormItemComponent implements OnInit {

    @Input() itemType: String = '';

    @Input() itemName: String = '';

    constructor() { }

    ngOnInit() { console.log('item'); }


    onFocus(info: any) {
        if (info && info.path && info.path[1]) {
            if (!info.path[1].classList.contains('active-text')) {
                info.path[1].classList.add('active-text');
            }
        }
    }

    onBlur(info: any) {
        if (info && info.path && info.path[0] && info.path[1]) {
            if (!info.path[0].value && info.path[1].classList.contains('active-text')) {
                info.path[1].classList.remove('active-text');
            }
        }
    }

}
