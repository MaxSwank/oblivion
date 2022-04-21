import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CafeComponent } from './cafe/cafe.component';
import { OrderPageComponent } from './landing-page/order-page/order-page.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { AuthorQuotesComponent } from './landing-page/author-quotes/author-quotes.component';


const routes: Routes = [
  // {
  //   path: 'test',
  //   component: TestComponent,
  //   data: {
  //     'title': 'testing'
  //   }
  // },
  {
    path: '',
    component: LandingPageComponent,
    data: {
      'title': 'Oblivion home',
      'desc': 'Peer into the window and see what awaits',
      'url': 'https://mango-rock-072624310.1.azurestaticapps.net',
      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/temp-cafe.jpg'
    }
  },
  {
    path: 'cafe',
    component: CafeComponent,
    data: {
      'title': 'Oblivion cafe',
      'desc': 'Stylish hotel cafe',
      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe',
      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/cafe-interior.jpg'
    }
  },
  {
    path: 'order',
    component: OrderPageComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'author-quotes',
    component: AuthorQuotesComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    component: LandingPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
