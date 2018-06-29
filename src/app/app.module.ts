import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { Language } from './services/language/language.service';
import { Configuration } from './services/configuration/configuration.service';
import { Config } from './config/config';
import { Home } from './components/home/home';
import { About } from './components/about/about';
import { Card } from './components/common/card/card';
import { CircleImage } from './components/common/circle-image/circleImage';
import { ContactList } from './components/common/contact-list/contactList';

@NgModule({
  declarations: [
    AppComponent,
    Home,
    About,
    Card,
    CircleImage,
    ContactList
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([]),
    BrowserAnimationsModule,
    AngularFontAwesomeModule
  ],
  providers: [Language, Configuration, Location, Config],
  bootstrap: [AppComponent]
})
export class AppModule { }
