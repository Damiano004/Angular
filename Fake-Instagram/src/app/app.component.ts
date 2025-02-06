import { Post } from './Core/Model/Post.model';
import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCardComponent } from "./UI/post-card/post-card.component";
import { PostManagerService } from './Core/post-manager/post-manager.service';

@Component({
  selector: 'app-root',
  imports: [PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fake-Instagram';

  postManaverSrv = inject(PostManagerService);

  


}
