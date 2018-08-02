import { Component, Input, OnInit } from '@angular/core';

@Component ({
    selector: 'experience-list',
    styleUrls: ['./experienceList.style.scss'],
    templateUrl: './experienceList.template.html'
})

export class ExperienceListComponent {
    bTechnologyDetail: boolean = false;
    bProjectDetail: boolean = false;
    @Input() experienceInfo;
    @Input()
    set option(option: boolean) {
        this.bTechnologyDetail = option;
        this.bProjectDetail = option;
    }
    position = 'before';

    showProject(bProjectStatus) {
        this.bProjectDetail = !bProjectStatus;
    }

    showTechnology(bDetailStatus) {
        this.bTechnologyDetail = !bDetailStatus;
    }
}