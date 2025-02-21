import { RouterLink } from '@angular/router';
import { Post } from './../../Core/Model/Post.model';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-post-card',
  imports: [RouterLink],
  templateUrl: './post-card.component.html',
  styleUrl: './post-card.component.scss'
})
export class PostCardComponent {
  post = input.required<Post>();
}
