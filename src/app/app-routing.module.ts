import { CafeHomeComponent } from './cafe/cafe-home/cafe-home.component';
import { Character1DialogComponent } from './cafe/cafe-dialogs/bangs-dialog/character1-dialog.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CafeComponent } from './cafe/cafe.component';
import { OrderPageComponent } from './landing-page/order-page/order-page.component';
import { ContactComponent } from './landing-page/contact/contact.component';
import { AuthorQuotesComponent } from './landing-page/author-quotes/author-quotes.component';
import { Character2DialogComponent } from './cafe/cafe-dialogs/maudy-gammitt-dialog/character2-dialog.component';
import { ArbiterDialogComponent } from './cafe/cafe-dialogs/arbiter-dialog/arbiter-dialog.component';
import { Character3DialogComponent } from './cafe/cafe-dialogs/gary-katsarida-dialog/character3-dialog.component';
import { Character4DialogComponent } from './cafe/cafe-dialogs/josef-wosek-dialog/character4-dialog.component';
import { Character5DialogComponent } from './cafe/cafe-dialogs/else-lasker-schuler-dialog/character5-dialog.component';
import { Character6DialogComponent } from './cafe/cafe-dialogs/character6-dialog/character6-dialog.component';
import { TypewriterDialogComponent } from './cafe/cafe-dialogs/typewriter-dialog/typewriter-dialog.component';
import { WallDialogComponent } from './cafe/cafe-dialogs/wall-dialog/wall-dialog.component';
import { WindowDialogComponent } from './cafe/cafe-dialogs/window-dialog/window-dialog.component';
import { PreorderDialogComponent } from './dialogs/preorder-dialog/preorder-dialog.component';
import { ReviewsDialogComponent } from './dialogs/reviews-dialog/reviews-dialog.component';


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
      {
        path: 'preorder',
        component: PreorderDialogComponent
        data: {
          'title': 'Oblivion Preorder',
          'desc': 'Preorder Oblivion by Robin Hemley',
          'url': 'https://mango-rock-072624310.1.azurestaticapps.net',
          'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/temp-cafe.jpg'
        }
      },
      {
        path: 'reviews',
        component: ReviewsDialogComponent,
        children: [
          {
            path: 'preorder',
            component: PreorderDialogComponent,
          }
        ]
      }
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
            path: 'bangs',
            component: Character1DialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'maudy_gammitt',
            component: Character2DialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'gary_katsarida',
            component: Character3DialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'josef_wozek',
            component: Character4DialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'else_lasker_schuler',
            component: Character5DialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'character6',
            component: Character6DialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'arbiter',
            component: ArbiterDialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'wall-of-exceptionally-minor-authors',
            component: WallDialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'typewriter',
            component: TypewriterDialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'window',
            component: WindowDialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
              }
            ]
          },
          {
            path: 'preorder',
            component: PreorderDialogComponent,
            children: [
              {
                path: 'reviews',
                component: ReviewsDialogComponent,
                children: [
                  {
                    path: 'preorder',
                    component: PreorderDialogComponent,
                  }
                ]
              }
            ]
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
    path: 'reviews',
    component: AuthorQuotesComponent,
    children: [
      {
        path: 'preorder',
        component: PreorderDialogComponent,
      }
    ]
  },
  {
    path: 'order',
    component: OrderPageComponent
  },
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: 'preorder',
        component: PreorderDialogComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'corrected' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
