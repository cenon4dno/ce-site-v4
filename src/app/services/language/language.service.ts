import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class LanguageService {
  public lang: any;
  public configType: string = 'CONTENT_API';

  constructor(private http: Http) {}

  public getPageContent(page) {
    let arrContents = [];
    let content = this.lang.contents || [];
    console.log(this.lang);
    if ( content.length > 0) {
      arrContents = content.filter(
        x => x.page === page
      );
    }

    return arrContents;
  }

  public getSectionContent(section) {
    let arrContents = [];
    let content = this.lang.contents || [];
    console.log(this.lang);
    if ( content.length > 0) {
      arrContents = content.filter(
        x => x.section === section
      );
    }

    return arrContents;
  }

  public geti18nFile(config): Promise<any> {
    let langConfig = config.find(conf => conf.code === this.configType);
    return this.http.get(langConfig.configUrl + langConfig.configPath)
      .toPromise()
      .then(response => {
        this.lang = this.extractData(response);
        return this.lang;
      })
      .catch(this.handleErrorPromise);
  }

  private extractData(res: Response) {
    let body = res.json();

    return body;
  }

  private handleErrorPromise (error: Response | any): Promise<any> {
	  console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
