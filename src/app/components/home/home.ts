import {Component} from '@angular/core';
import {LanguageService} from 'services/language/language.service';

@Component({
  selector: 'home',
  styleUrls: ['./home.style.scss'],
  templateUrl: './home.template.html'
})

export class HomeComponent {
  public contents: string[];
  public greetings: string[];
  private header = 'greetings';
  private page = 'resume';

  constructor(private langFile: LanguageService) {
    this.greetings = langFile.getSectionContent(this.header);
    this.contents = this.sortingOfContents(
      langFile.getPageContent(this.page)
    );
  }

  private sortingOfContents(contents) {
    if (contents.length > 0) {
      contents.sort((a, b) => {
        if (a.sort < b.sort) {
          return -1;
        } else if (a.sort > b.sort) {
          return 1;
        } else {
          return 0;
        }
      });
    }

    return contents;
  }
}
