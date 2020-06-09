import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpineComponent } from './spine/spine/spine.component';
import { SentryComponent } from './sentry/sentry/sentry.component';
import { LineupComponent } from './core/lineup/lineup/lineup.component';
import { ConvictComponent } from './core/convict/convict.component';
import { SuspectComponent } from './core/lineup/suspect/suspect.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SpineComponent,
    SentryComponent,
    LineupComponent,
    ConvictComponent,
    SuspectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
