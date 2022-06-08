import { CafeHomeComponent } from './cafe/cafe-home/cafe-home.component';
import { Character1DialogComponent } from './cafe/cafe-dialogs/bangs-dialog/character1-dialog.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CafeComponent } from './cafe/cafe.component';
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
    children: [
      {
        path: 'preorder',
        component: PreorderDialogComponent
      },
      {
        path: 'reviews',
        component: ReviewsDialogComponent
      },
    ],
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
            path: 'reviews',
            component: ReviewsDialogComponent
          },
          {
            path: 'john_kendrick_bangs',
            component: Character1DialogComponent
          },          
          {
            path: 'maudy_gammitt',
            component: Character2DialogComponent
          },
          {
            path: 'gary_katsarida',
            component: Character3DialogComponent
          },
          {
            path: 'jozef_wozek',
            component: Character4DialogComponent
          },
          {
            path: 'else_lasker_schuler',
            component: Character5DialogComponent
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
                    component: ReviewsDialogComponent
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
                    component: ReviewsDialogComponent
                  }
                ]
              }
            ]
          },
          {
            path: 'wall_of_exceptionally_minor_authors',
            component: WallDialogComponent,
            children: [
              {
                path: 'preorder',
                component: PreorderDialogComponent,
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent
                  }
                ]
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
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                  }
                ]
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
                children: [
                  {
                    path: 'reviews',
                    component: ReviewsDialogComponent,
                  }
                ]
              }
            ]
          },
          {
            path: 'preorder',
            component: PreorderDialogComponent,
            children: [
              {
                path: 'reviews',
                component: ReviewsDialogComponent
              }
            ]
          }
        ]
      }
    ],
  },
  {
    path: 'reviews',
    component: AuthorQuotesComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    relativeLinkResolution: 'corrected',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
