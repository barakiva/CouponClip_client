import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpineComponent } from './spine/spine/spine.component';
import { SentryComponent } from './sentry/sentry/sentry.component';
import { CoreComponent } from './core/core/core.component';
import { LineupComponent } from './lineup/lineup/lineup.component';
import { ConvictComponent } from './core/convict/convict.component';
import { SuspectComponent } from './lineup/suspect/suspect.component';
import {CouponApiService} from "./services/coupon-api.service";

@NgModule({
  declarations: [
    AppComponent,
    SpineComponent,
    SentryComponent,
    CoreComponent,
    LineupComponent,
    ConvictComponent,
    SuspectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CouponApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
