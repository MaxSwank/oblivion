import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
import { AboutComponent } from './about/about.component';
import { LameRouteComponent } from './lame-route/lame-route.component';
import { ScullyInterceptModule } from 'scully-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    TestComponent,
    AboutComponent,
    LameRouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    ScullyInterceptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
