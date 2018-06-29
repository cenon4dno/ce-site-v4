import { Component, Input } from '@angular/core';

@Component ({
    selector: 'contact-list',
    styleUrls: ['./contactList.style.scss'],
    templateUrl: './contactList.template.html'
})

export class ContactList {
    @Input() contactInfo: Object;

    constructor() {
        console.log(JSON.stringify(this.contactInfo));
    }
}