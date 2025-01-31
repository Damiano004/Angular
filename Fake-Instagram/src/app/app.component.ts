import { Post } from './Core/Model/Post.model';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fake-Instagram';

  post: Post ={
    titolo: "Seconda lezione all'AFP",
    body: "Stiamo imparando a creare progetti con angular e a strutturarli",
    id: 0,
    userId: 31543
  }
}
