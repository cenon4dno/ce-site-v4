import { Component, Input } from '@angular/core';

@Component ({
    selector: 'contact-list',
    styleUrls: ['./contactList.style.scss'],
    templateUrl: './contactList.template.html'
})

export class ContactListComponent {
    @Input() contactInfo: Object;

    constructor() {}
}