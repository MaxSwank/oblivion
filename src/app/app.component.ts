import { Component } from '@angular/core';
import { SocialTagsService } from './services/social-tag-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public constructor(private tagsService: SocialTagsService) {
    this.tagsService.setTitleAndTags();
  }
}
