import { Component, Input } from '@angular/core';
import {ContactList} from 'components/common/contact-list/contactList';

@Component ({
    selector: 'card',
    styleUrls: ['./card.style.scss'],
    templateUrl: './card.template.html'
})

export class Card {
    @Input() cardInfo: Object;

    constructor() {}
}