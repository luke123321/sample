import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-main-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

    // @Input() adminForm: FormGroup;
    adminForm: FormGroup;

    constructor() { }

    // ngOnInit() { }

    ngOnInit() {
        this.adminForm = new FormGroup({
            'name': new FormControl('', [Validators.required])
        });
    }

}
