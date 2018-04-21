import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-main-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

    adminForm: FormGroup;
    
    constructor() { }

    ngOnInit() {
        this.adminForm = new FormGroup({
            'name': new FormControl('', [Validators.required])
        });
    }

}
