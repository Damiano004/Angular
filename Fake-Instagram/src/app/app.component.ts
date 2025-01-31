import { Post } from './Core/Model/Post.model';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostCardComponent } from "./UI/post-card/post-card.component";

@Component({
  selector: 'app-root',
  imports: [PostCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Fake-Instagram';

  postList = signal<Post[]>([]);

  //negli array, utilizzando lo spread operator "..." esporta una copia du tutti i
  //valori dell'array, è come ciclare per tutto l'array che fa "array1[i] = array2[i]"
  //semplicemente facendo "array2 = [...array1]"
  generaPost(){
    this.postList.update(item => {
      return [...item,{
        titolo: "Terza lezione all'AFP ciaoooo",
        body: "Stiamo Morendo dentro UwU cazzo palle ngieshtoughng",
        id: 0,
        userId: Math.random()*100
      }]
    });
  }
}
