import 'hammerjs';

// Module
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule, MatCheckboxModule, MatTooltipModule } from '@angular/material';

// Services
import { LanguageService } from './services/language/language.service';
import { ConfigurationService } from './services/configuration/configuration.service';
import { ConfigCollectionService } from './config/config.service';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home';
import { AboutComponent } from './components/about/about';
import { CardComponent } from './components/common/card/card';
import { CircleImageComponent } from './components/common/circle-image/circleImage';
import { ContactListComponent } from './components/common/contact-list/contactList';
import { EducationListComponent } from './components/common/education-list/educationList';
import { SkillListComponent } from './components/common/skill-list/skillList';
import { TrainingListComponent } from './components/common/training-list/trainingList';
import { CertificationListComponent } from './components/common/certification-list/certificationList';
import { HobbiesListComponent } from './components/common/hobbies-list/hobbiesList';
import { ExperienceListComponent } from './components/common/experience-list/experienceList';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    CardComponent,
    CircleImageComponent,
    ContactListComponent,
    EducationListComponent,
    SkillListComponent,
    TrainingListComponent,
    CertificationListComponent,
    HobbiesListComponent,
    ExperienceListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    MatButtonModule,
    MatCheckboxModule,
    MatTooltipModule
  ],
  providers: [
    LanguageService,
    ConfigurationService,
    ConfigCollectionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
