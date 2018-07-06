import { Component, Input } from '@angular/core';

@Component ({
    selector: 'card',
    styleUrls: ['./card.style.scss'],
    templateUrl: './card.template.html'
})

export class CardComponent {
    @Input() cardInfo: Object;

    constructor() {}
}