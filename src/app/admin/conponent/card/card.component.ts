import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-main-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

    @Input() title: String = '';

    @Input() brief: String = '';

    constructor() { }

    ngOnInit() { }

}
