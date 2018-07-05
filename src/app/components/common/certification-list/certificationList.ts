import { Component, Input } from '@angular/core';

@Component ({
    selector: 'certification-list',
    styleUrls: ['./certificationList.style.scss'],
    templateUrl: './certificationList.template.html'
})

export class CertificationListComponent {
    @Input() certificationInfo;

    constructor() {}
}