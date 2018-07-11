import { Component, Input } from '@angular/core';

@Component ({
    selector: 'card',
    styleUrls: ['./card.style.scss'],
    templateUrl: './card.template.html'
})

export class CardComponent {
    @Input() cardInfo: Object;
    skillOption = false;

    constructor() {}

    activateOption(category, option) {
        switch(category) {
            case "Skills":
                this.skillOption = !this.skillOption;
                break;
        }
        console.log(this.skillOption);

    }
}