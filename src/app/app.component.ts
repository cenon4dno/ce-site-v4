/// src/app/index.ts
import {Component} from '@angular/core';
import {ConfigurationService} from 'services/configuration/configuration.service';
import {LanguageService} from 'services/language/language.service';

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
    private copyrightText = 'copyright';

    constructor(private intLang: LanguageService, private configuration: ConfigurationService) {

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