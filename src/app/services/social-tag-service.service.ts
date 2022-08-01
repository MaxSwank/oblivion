import { Injectable } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title, Meta } from '@angular/platform-browser';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SocialTagsService {

  public constructor(private titleService: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private scully: ScullyRoutesService,
    private meta: Meta) {
  }

  readonly tagDescription: string = '';
  readonly tagImage: string = '';
  readonly urlPrefix: string = '';
  readonly siteName: string = '';
  readonly userTwitter: string = '';

  setTitleAndTags() {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map(route => {
        console.log(route.root);
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
    ).subscribe(() => {
      this.scully.getCurrent().subscribe(
        link => {
          console.log(this.data);
          this.titleService.setTitle(this.data['title']);
          const description = this.data['desc'] ? this.data['desc'] : this.tagDescription;
          this.meta.updateTag({ name: 'og:url', content: this.urlPrefix + this.router.url });
          this.meta.updateTag({ name: 'description', content: description });
          this.meta.updateTag({ name: 'image', content: this.data['image'] });
          this.meta.updateTag({ name: 'og:title', content: this.data['title'] });
          this.meta.updateTag({ name: 'og:description', content: description });
          this.meta.updateTag({ name: 'og:type', content: 'website' });
          this.meta.updateTag({ name: 'og:image', content: this.data['image'] });
          this.meta.updateTag({ name: 'og:image:width', content: this.data['width'] });
          this.meta.updateTag({ name: 'og:image:height', content: this.data['height'] });
        });
    });
  }

  private get data() { return this.activatedRoute.snapshot.firstChild!.data; }
}