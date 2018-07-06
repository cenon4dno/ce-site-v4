import { Component, Input } from '@angular/core';

@Component ({
    selector: 'training-list',
    styleUrls: ['./trainingList.style.scss'],
    templateUrl: './trainingList.template.html'
})

export class TrainingListComponent {
    @Input() trainingInfo;

    constructor() {}
}