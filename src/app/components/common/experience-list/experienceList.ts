import { Component, Input, OnInit } from '@angular/core';

@Component ({
    selector: 'experience-list',
    styleUrls: ['./experienceList.style.scss'],
    templateUrl: './experienceList.template.html'
})

export class ExperienceListComponent {
    @Input() experienceInfo;
    bTechnologyDetail: boolean = false;
    bProjectDetail: boolean = false;
    @Input()
    set option(option: boolean) {
        this.bTechnologyDetail = option;
        this.bProjectDetail = option;
    }

    showProject(bProjectStatus) {
        this.bProjectDetail = !bProjectStatus;
    }

    showTechnology(bDetailStatus) {
        this.bTechnologyDetail = !bDetailStatus;
    }
}