import { Component, Input } from '@angular/core';

@Component ({
    selector: 'experience-list',
    styleUrls: ['./experienceList.style.scss'],
    templateUrl: './experienceList.template.html'
})

export class ExperienceListComponent {
    @Input() experienceInfo;
    bTechnologyDetail: boolean = false;

    constructor() {}

    showTechnology(bDetailStatus) {
        this.bTechnologyDetail = !bDetailStatus;
    }
}