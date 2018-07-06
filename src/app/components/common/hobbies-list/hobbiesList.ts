import { Component, Input } from '@angular/core';
import {TooltipPosition} from '@angular/material';

@Component ({
    selector: 'hobbies-list',
    styleUrls: ['./hobbiesList.style.scss'],
    templateUrl: './hobbiesList.template.html'
})

export class HobbiesListComponent {
    @Input() hobbiesInfo;
    position = 'before';

    constructor() {}
}