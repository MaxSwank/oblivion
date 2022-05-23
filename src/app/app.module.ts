import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { AboutComponent } from './about/about.component';
import { CafeComponent } from './cafe/cafe.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { OrderPageComponent } from './landing-page/order-page/order-page.component';
import { ScullyInterceptModule } from 'scully-interceptor';
import { MaterialModule } from './material.module';
import { TypewriterDialogComponent } from './cafe/cafe-dialogs/typewriter-dialog/typewriter-dialog.component';
import { WindowDialogComponent } from './cafe/cafe-dialogs/window-dialog/window-dialog.component';
import { WallDialogComponent } from './cafe/cafe-dialogs/wall-dialog/wall-dialog.component';
import { Character1DialogComponent } from './cafe/cafe-dialogs/bangs-dialog/character1-dialog.component';
import { Character2DialogComponent } from './cafe/cafe-dialogs/maudy-gammitt-dialog/character2-dialog.component';
import { Character3DialogComponent } from './cafe/cafe-dialogs/gary-katsarida-dialog/character3-dialog.component';
import { Character4DialogComponent } from './cafe/cafe-dialogs/josef-wosek-dialog/character4-dialog.component';
import { Character5DialogComponent } from './cafe/cafe-dialogs/else-lasker-schuler-dialog/character5-dialog.component';
import { Character6DialogComponent } from './cafe/cafe-dialogs/character6-dialog/character6-dialog.component';
import { ArbiterDialogComponent } from './cafe/cafe-dialogs/arbiter-dialog/arbiter-dialog.component';
import { PreorderDialogComponent } from './dialogs/preorder-dialog/preorder-dialog.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { AuthorQuotesComponent } from './landing-page/author-quotes/author-quotes.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HeaderComponent } from './cafe/header/header.component';
import { FooterComponent } from './cafe/footer/footer.component';
import { CafeHomeComponent } from './cafe/cafe-home/cafe-home.component';
import { ReviewsDialogComponent } from './dialogs/reviews-dialog/reviews-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    AboutComponent,
    CafeComponent,
    OrderPageComponent,
    ContactComponent,
    TypewriterDialogComponent,
    WindowDialogComponent,
    WallDialogComponent,
    Character1DialogComponent,
    Character2DialogComponent,
    Character3DialogComponent,
    Character4DialogComponent,
    Character5DialogComponent,
    Character6DialogComponent,
    ArbiterDialogComponent,
    PreorderDialogComponent,
    AuthorQuotesComponent,
    HeaderComponent,
    FooterComponent,
    CafeHomeComponent,
    ReviewsDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    ScullyInterceptModule,
    MaterialModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    IvyCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
