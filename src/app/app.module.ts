import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpineComponent } from './spine/spine/spine.component';
import { SentryComponent } from './sentry/sentry/sentry.component';
import { CoreComponent } from './core/core/core.component';
import { LineupComponent } from './core/lineup/lineup.component';
import { ConvictComponent } from './core/convict/convict.component';

@NgModule({
  declarations: [
    AppComponent,
    SpineComponent,
    SentryComponent,
    CoreComponent,
    LineupComponent,
    ConvictComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
