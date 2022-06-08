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
import { WindowDialogComponent } from './cafe/cafe-dialogs/playbill-dialog/window-dialog.component';
import { PreorderDialogComponent } from './dialogs/preorder-dialog/preorder-dialog.component';
import { ReviewsDialogComponent } from './dialogs/reviews-dialog/reviews-dialog.component';


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    data: {
      'title': 'Oblivion home',
      'desc': 'Peer into the window and see what awaits',
      'url': 'https://www.oblivion.cafe',
      'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
      'width': '975',
      'height': '1572'
    },
    children: [
      {
        path: 'contact',
        component: ContactComponent,
        data: {
          'title': 'Oblivion contact',
          'desc': 'Contact for Oblivion by Robin Hemley',
          'url': 'https://www.oblivion.cafe/contact',
          'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
          'width': '975',
          'height': '1572'
        }
      },
      {
        path: 'preorder',
        component: PreorderDialogComponent,
        data: {
          'title': 'Oblivion Preorder',
          'desc': 'Preorder Oblivion by Robin Hemley',
          'url': 'https://www.oblivion.cafe/preorder',
          'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
          'width': '975',
          'height': '1572'
        }
      },
      {
        path: 'reviews',
        component: ReviewsDialogComponent,
        data: {
          'title': 'Oblivion Reviews',
          'desc': 'Reviews of Oblivion by Robin Hemley',
          'url': 'https://www.oblivion.cafe/preorder/reviews',
          'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
          'width': '975',
          'height': '1572'
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
      'url': 'https://www.oblivion.cafe/cafe',
      'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
      'width': '975',
      'height': '1572'
    },
    children: [
      {
        path: '',
        component: CafeComponent,
        children: [
          {
            path: 'reviews',
            component: ReviewsDialogComponent,
            data: {
              'title': 'Oblivion Reviews',
              'desc': 'Reviews of Oblivion by Robin Hemley',
              'url': 'https://www.oblivion.cafe/cafe/john_kendrick_bangs/preorder/reviews',
              'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
              'width': '975',
              'height': '1572'
            },
          },
          {
            path: 'john_kendrick_bangs',
            component: Character1DialogComponent,
            data: {
              'title': 'John Kendrick Bangs',
              'desc': 'Tell the maître d’ about an imposter — Oblivion by Robin Hemley',
              'url': 'https://www.oblivion.cafe/cafe/john_kendrick_bangs',
              'image': 'https://www.oblivion.cafe/assets/img/bangs-pod-color.png',
              'width': '180',
              'height': '420'
            }
          },          
          {
            path: 'maudy_gammitt',
            component: Character2DialogComponent,
            data: {
              'title': 'Maudy Gammitt',
              'desc': 'Maudy Gammitt — Oblivion by Robin Hemley',
              'url': 'https://www.oblivion.cafe/cafe/maudy_gammitt',
              'image': 'https://www.oblivion.cafe/assets/img/maudy-gammitt.png',
              'width': '1324',
              'height': '1536'
            }
          },
          {
            path: 'gary_katsarida',
            component: Character3DialogComponent,
            data: {
              'title': 'Gary Katsarida',
              'desc': 'Gary Katsarida — Oblivion by Robin Hemley',
              'url': 'https://www.oblivion.cafe/cafe/gary_katsarida',
              'image': 'https://www.oblivion.cafe/assets/img/gary-katsarida.png',
              'width': '1324',
              'height': '1536'
            }
          },
          {
            path: 'jozef_wozek',
            component: Character4DialogComponent,
            data: {
              'title': 'Józef Wozek',
              'desc': 'Józef Wozek — Oblivion by Robin Hemley',
              'url': 'https://www.oblivion.cafe/cafe/josef_wozek',
              'image': 'https://www.oblivion.cafe/assets/img/jozef-wozek.png',
              'width': '1324',
              'height': '1536'
            }
          },
          {
            path: 'else_lasker_schuler',
            component: Character5DialogComponent,
            data: {
              'title': 'Else Lasker-Schüler',
              'desc': 'Else Lasker-Schüler — Oblivion by Robin Hemley',
              'url': 'https://www.oblivion.cafe/cafe/else_lasker_schuler',
              'image': 'https://www.oblivion.cafe/assets/img/else-lasker-schuler.png',
              'width': '1324',
              'height': '1536'
            }
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
                      'url': 'https://www.oblivion.cafe/character6/preorder/reviews',
                      'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
                      'width': '975',
                      'height': '1572'
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
                      'url': 'https://www.oblivion.cafe/arbiter/preorder/reviews',
                      'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
                      'width': '975',
                      'height': '1572'
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
              'url': 'https://www.oblivion.cafe/cafe/wall_of_exceptionally_minor_authors/',
              'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
              'width': '975',
              'height': '1572'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://www.oblivion.cafe/cafe/wall_of_exceptionally_minor_authors/preorder',
                  'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
                  'width': '975',
                  'height': '1572'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://www.oblivion.cafe/cafe/wall_of_exceptionally_minor_authors/preorder/reviews',
                      'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
                      'width': '975',
                      'height': '1572'
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
              'url': 'https://www.oblivion.cafe/cafe/typewriter/',
              'image': 'https://www.oblivion.cafe/assets/img/typewriter.png',
              'width': '220',
              'height': '230'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://www.oblivion.cafe/cafe/typewriter/preorder',
                  'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
                  'width': '975',
                  'height': '1572'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://www.oblivion.cafe/cafe/typewriter/preorder/reviews',
                      'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg',
                      'width': '975',
                      'height': '1572'
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
              'url': 'https://www.oblivion.cafe/cafe/window/',
              'image': 'https://www.oblivion.cafe/assets/img/typewriter.png'
            },
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                data: {
                  'title': 'Oblivion Preorder',
                  'desc': 'Preorder Oblivion by Robin Hemley',
                  'url': 'https://www.oblivion.cafe/cafe/window/preorder',
                  'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg'
                },
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                    data: {
                      'title': 'Oblivion Reviews',
                      'desc': 'Reviews of Oblivion by Robin Hemley',
                      'url': 'https://www.oblivion.cafe/cafe/window/preorder/reviews',
                      'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg'
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
              'url': 'https://www.oblivion.cafe/cafe/preorder',
              'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg'
            },
            children: [
              {
                path: 'reviews',
                component: ReviewsDialogComponent,
                data: {
                  'title': 'Oblivion Reviews',
                  'desc': 'Reviews of Oblivion by Robin Hemley',
                  'url': 'https://www.oblivion.cafe/cafe/preorder/reviews',
                  'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg'
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
      'url': 'https://www.oblivion.cafe/reviews',
      'image': 'https://www.oblivion.cafe/assets/img/BookCover.jpg'
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
