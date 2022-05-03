import { CafeHomeComponent } from './cafe/cafe-home/cafe-home.component';
import { Character1DialogComponent } from './cafe/cafe-dialogs/character1-dialog/character1-dialog.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CafeComponent } from './cafe/cafe.component';
import { OrderPageComponent } from './landing-page/order-page/order-page.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { AuthorQuotesComponent } from './landing-page/author-quotes/author-quotes.component';
import { Character2DialogComponent } from './cafe/cafe-dialogs/character2-dialog/character2-dialog.component';
import { ArbiterDialogComponent } from './cafe/cafe-dialogs/arbiter-dialog/arbiter-dialog.component';
import { Character3DialogComponent } from './cafe/cafe-dialogs/character3-dialog/character3-dialog.component';
import { Character4DialogComponent } from './cafe/cafe-dialogs/character4-dialog/character4-dialog.component';
import { Character5DialogComponent } from './cafe/cafe-dialogs/character5-dialog/character5-dialog.component';
import { Character6DialogComponent } from './cafe/cafe-dialogs/character6-dialog/character6-dialog.component';
import { TypewriterDialogComponent } from './cafe/cafe-dialogs/typewriter-dialog/typewriter-dialog.component';
import { WallDialogComponent } from './cafe/cafe-dialogs/wall-dialog/wall-dialog.component';
import { WindowDialogComponent } from './cafe/cafe-dialogs/window-dialog/window-dialog.component';
import { PreorderDialogComponent } from './dialogs/preorder-dialog/preorder-dialog.component';


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
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
     
    ],
    data: {
      'title': 'Oblivion home',
      'desc': 'Peer into the window and see what awaits',
      'url': 'https://mango-rock-072624310.1.azurestaticapps.net',
      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/temp-cafe.jpg'
    }
  },
  {
    path: 'cafe',
    component: CafeHomeComponent,
    children: [
      {
        path: '',
        component: CafeComponent,
        children: [          
          {
            path: 'character1',
            component: Character1DialogComponent
          },
          {
            path: 'character2',
            component: Character2DialogComponent
          },
          {
            path: 'character3',
            component: Character3DialogComponent
          },
          {
            path: 'character4',
            component: Character4DialogComponent
          },
          {
            path: 'character5',
            component: Character5DialogComponent
          },
          {
            path: 'character6',
            component: Character6DialogComponent
          },
          {
            path: 'arbiter',
            component: ArbiterDialogComponent
          },
          {
            path: 'wall-of-authors',
            component: WallDialogComponent
          },
          {
            path: 'typewriter',
            component: TypewriterDialogComponent
          },
          {
            path: 'window',
            component: WindowDialogComponent
          },
          {
            path: 'preorder',
            component: PreorderDialogComponent
          }
        ]
      }
    ],
    data: {
      'title': 'Oblivion cafe',
      'desc': 'Stylish hotel cafe',
      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe',
      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/cafe-interior.jpg'
    }
  },
  {
    path: 'author-quotes',
    component: AuthorQuotesComponent
  },
  {
    path: 'order',
    component: OrderPageComponent
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
