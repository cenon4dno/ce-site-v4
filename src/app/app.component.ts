/// src/app/index.ts
import {Component} from '@angular/core';
import {Configuration} from 'services/configuration/configuration.service';
import {Language} from 'services/language/language.service';

/*
 * App Component
 * Top Level Component
 */
@Component({
    selector: 'app', // <app></app>
    styleUrls: ['./app.component.scss'],
    templateUrl: './app.component.html'
})

export class AppComponent {
    public lang: object = {};
    public copyright: object = {};
    private copyrightText: string = 'copyright';

    constructor(private intLang: Language, private configuration: Configuration) {

        this.configuration.getConfig()
            .then((config) => {
                this.intLang.geti18nFile(config)
                    .then((lang) => {
                        this.lang = lang;
                        this.copyright = this.intLang.getSectionContent(this.copyrightText);
                    });
            });
    }
}