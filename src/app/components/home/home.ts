import {Component} from '@angular/core';
import {Language} from 'services/language/language.service';
import {CircleImage} from 'components/common/circle-image/circleImage';
import {Card} from 'components/common/card/card';

@Component({
  selector: 'home',
  styleUrls: ['./home.style.scss'],
  templateUrl: './home.template.html'
})

export class Home {
  public contents: string[];
  public greetings: string[];
  private header: string = 'greetings';
  private page: string = 'resume';

  constructor(private langFile: Language) {
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
