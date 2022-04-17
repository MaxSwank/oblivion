import { LameRouteComponent } from './lame-route/lame-route.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { TestComponent } from './test/test.component';
import { CafeComponent } from './cafe/cafe.component';
import { OrderPageComponent } from './landing-page/order-page/order-page.component';
import { ContactComponent } from './landing-page/contact/contact.component';


const routes: Routes = [
  {
    path: 'test',
    component: TestComponent,
    data: {
      'title': 'testing'
    }
  },
  {
    path: '',
    component: LandingPageComponent,
    data: {
      'title': "About me",
      'desc': 'I am Bassem, a management engineer, professional software developer, instructor, blogger .. whatever the role, my passions are software development and programming.'
    }
  },
  {
    path: 'cafe',
    component: CafeComponent
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
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'lame-route',
    component: LameRouteComponent
  },
  {
    path: '',
    component: AppComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
