import { Component, Input } from '@angular/core';
import { TooltipPosition } from '@angular/material';
import { FormControl } from '@angular/forms';

@Component ({
    selector: 'hobbies-list',
    styleUrls: ['./hobbiesList.style.scss'],
    templateUrl: './hobbiesList.template.html'
})

export class HobbiesListComponent {
    @Input() hobbiesInfo;
    positionOptions: TooltipPosition[] = ['above'];
    position = new FormControl(this.positionOptions[0]);

    constructor() {}
}