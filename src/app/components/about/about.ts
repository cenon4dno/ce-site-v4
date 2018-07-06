import {Component} from '@angular/core';
import {LanguageService} from 'services/language/language.service';

@Component({
    selector: 'about',
    template: './about.template.html',
    styles: ['./about.style.scss']
})

export class AboutComponent {
    public contents: string[];
    private page = 'about';

    constructor(private langFile: LanguageService) {
        this.contents = langFile.getPageContent(this.page);
    }
}
