import { Component, Input } from '@angular/core';

@Component ({
    selector: 'skill-list',
    styleUrls: ['./skillList.style.scss'],
    templateUrl: './skillList.template.html'
})

export class SkillListComponent {
    @Input() skillInfo;
    @Input() option;

    ngOnInit() {
        console.log(this.skillInfo);
    }
}