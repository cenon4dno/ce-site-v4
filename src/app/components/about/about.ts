import {Component} from '@angular/core';
import {Language} from 'services/language/language.service';

@Component({
    selector: 'about',
    template: './about.template.html',
    styles: ['./about.style.scss']
})

export class About {
    public contents: string[];
    private page: string = 'about';

    constructor(private langFile: Language) {
        this.contents = langFile.getPageContent(this.page);
    }
}
