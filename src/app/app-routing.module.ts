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
  {
    path: '',
    component: LandingPageComponent,
    data: {
      'title': 'Oblivion home',
      'desc': 'Peer into the window and see what awaits',
      'url': 'https://mango-rock-072624310.1.azurestaticapps.net',
      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/temp-cafe.jpg'
    },
    children: [
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          'title': 'Oblivion contact',
          'desc': 'Contact for Oblivion by Robin Hemley',
          'url': 'https://mango-rock-072624310.1.azurestaticapps.net/contact',
          'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
        }
      },
      {
        path: 'preorder',
        component: PreorderDialogComponent,
        data: {
          'title': 'Oblivion Preorder',
          'desc': 'Preorder Oblivion by Robin Hemley',
          'url': 'https://mango-rock-072624310.1.azurestaticapps.net/preorder',
          'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
        }
      },
      {
        path: 'reviews',
        component: ReviewsDialogComponent,
        data: {
          'title': 'Oblivion Reviews',
          'desc': 'Reviews of Oblivion by Robin Hemley',
          'url': 'https://mango-rock-072624310.1.azurestaticapps.net/preorder/reviews',
          'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
        }
      },
    ],
  },
  {
    path: 'cafe',
    component: CafeHomeComponent,
    data: {
      'title': 'Oblivion Cafe',
      'desc': 'Welcome to the Café of Minor Authors — Oblivion by Robin Hemley',
      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe',
      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
    },
    children: [
      {
        path: '',
        component: CafeComponent,
        children: [
          {
            path: 'john_kendrick_bangs',
            component: Character1DialogComponent,
            data: {
              'title': 'John Kendrick Bangs',
              'desc': 'Tell the maître d’ about an imposter — Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/john_kendrick_bangs',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/bangs.png'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/john_kendrick_bangs/preorder',
                  'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                }
              }
            ]
          },
          {
            path: 'reviews',
            component: ReviewsDialogComponent,
            data: {
              'title': 'Oblivion Reviews',
              'desc': 'Reviews of Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/john_kendrick_bangs/preorder/reviews',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
            },
          },
          {
            path: 'maudy_gammitt',
            component: Character2DialogComponent,
            data: {
              'title': 'Maudy Gammitt',
              'desc': 'Maudy Gammitt — Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/maudy_gammitt',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/maudy-gammitt.png'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/maudy_gammitt/preorder',
                  'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/maudy_gammitt/preorder/reviews',
                      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                    },
                  }
                ]
              }
            ]
          },
          {
            path: 'gary_katsarida',
            component: Character3DialogComponent,
            data: {
              'title': 'Gary Katsarida',
              'desc': 'Gary Katsarida — Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/gary_katsarida',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/gary-katsarida.png'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/gary_katsarida/preorder',
                  'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/gary_katsarida/preorder/reviews',
                      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                    },
                  }
                ]
              }
            ]
          },
          {
            path: 'josef_wozek',
            component: Character4DialogComponent,
            data: {
              'title': 'Jósef Wozek',
              'desc': 'Jósef Wozek — Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/josef_wozek',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/josef-wozek.png'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/josef_wozek/preorder',
                  'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/josef_wozek/preorder/reviews',
                      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                    },
                  }
                ]
              }
            ]
          },
          {
            path: 'else_lasker_schuler',
            component: Character5DialogComponent,
            data: {
              'title': 'Else Lasker-Schüler',
              'desc': 'Else Lasker-Schüler — Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/else_lasker_schuler',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/else-lasker-schuler.png'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/else_lasker_schuler/preorder',
                  'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/else_lasker_schuler/preorder/reviews',
                      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                    },
                  }
                ]
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
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/character6/preorder/reviews',
                      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                    },
                  }
                ]
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
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/arbiter/preorder/reviews',
                      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                    },
                  }
                ]
              }
            ]
          },
          {
            path: 'wall_of_exceptionally_minor_authors',
            component: WallDialogComponent,
            data: {
              'title': 'Wall of Exceptionally Minor Authors',
              'desc': 'Wall of Exceptionally Minor Authors — Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/wall_of_exceptionally_minor_authors/',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/wall_of_exceptionally_minor_authors/preorder',
                  'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/wall_of_exceptionally_minor_authors/preorder/reviews',
                      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                    },
                  }
                ]
              }
            ]
          },
          {
            path: 'typewriter',
            component: TypewriterDialogComponent,
            data: {
              'title': 'Typewriter',
              'desc': 'Enter to Win — Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/typewriter/',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/typewriter.png'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/typewriter/preorder',
                  'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/typewriter/preorder/reviews',
                      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                    },
                  }
                ]
              }
            ]
          },
          {
            path: 'window',
            component: WindowDialogComponent,
            data: {
              'title': 'Window to Prague',
              'desc': 'A view on Kafka’s Prague — Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/window/',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/typewriter.png'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/window/preorder',
                  'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/window/preorder/reviews',
                      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                    },
                  }
                ]
              }
            ]
          },
          {
            path: 'preorder',
            component: PreorderDialogComponent,
            data: {
              'title': 'Oblivion Preorder',
              'desc': 'Preorder Oblivion by Robin Hemley',
              'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/preorder',
              'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
            },
            children: [
              {
                path: 'reviews',
                component: ReviewsDialogComponent,
                data: {
                  'title': 'Oblivion Reviews',
                  'desc': 'Reviews of Oblivion by Robin Hemley',
                  'url': 'https://mango-rock-072624310.1.azurestaticapps.net/cafe/preorder/reviews',
                  'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
                },
              }
            ]
          }
        ]
      }
    ],
  },
  {
    path: 'reviews',
    component: AuthorQuotesComponent,
    data: {
      'title': 'Oblivion Reviews',
      'desc': 'Reviews of Oblivion by Robin Hemley',
      'url': 'https://mango-rock-072624310.1.azurestaticapps.net/reviews',
      'image': 'https://mango-rock-072624310.1.azurestaticapps.net/assets/img/BookCover.jpg'
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
