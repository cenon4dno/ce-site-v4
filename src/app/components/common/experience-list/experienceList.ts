import { Component, Input } from '@angular/core';

@Component ({
    selector: 'experience-list',
    styleUrls: ['./experienceList.style.scss'],
    templateUrl: './experienceList.template.html'
})

export class ExperienceListComponent {
    @Input() experienceInfo;
    bTechnologyDetail: boolean = false;
    bProjectDetail: boolean = false;

    constructor() {}

    showProject(bProjectStatus) {
        this.bProjectDetail = !bProjectStatus;
    }

    showTechnology(bDetailStatus) {
        this.bTechnologyDetail = !bDetailStatus;
    }
}