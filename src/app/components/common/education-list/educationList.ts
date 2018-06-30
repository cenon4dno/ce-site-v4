import { Component, Input } from '@angular/core';

@Component ({
    selector: 'education-list',
    styleUrls: ['./educationList.style.scss'],
    templateUrl: './educationList.template.html'
})

export class EducationListComponent {
    @Input() educationInfo: Object;

    constructor() {
        console.log(JSON.stringify(this.educationInfo));
    }
}