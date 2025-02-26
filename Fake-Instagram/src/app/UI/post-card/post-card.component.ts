import { Router, RouterLink } from '@angular/router';
import { Post } from './../../Core/Model/Post.model';
import { Component, inject, input } from '@angular/core';
import { PostManagerService } from '../../Core/service/post-manager/post-manager.service';
import { AppStateManagerService } from '../../Core/service/state-manager/app-state-manager.service';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  post = input.required<Post>();
  PostManagerSrv = inject(PostManagerService)
  router = inject(Router)
  appstate = inject(AppStateManagerService)

  modifica(){
    this.router.navigate(["/modifica-post",this.post().id,this.post().userId,this.post().titolo,this.post().body])
  }
}
