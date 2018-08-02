import { Component, Input } from '@angular/core';

@Component ({
    selector: 'hobbies-list',
    styleUrls: ['./hobbiesList.style.scss'],
    templateUrl: './hobbiesList.template.html'
})

export class HobbiesListComponent {
    @Input() hobbiesInfo;
    @Input() option;
}