import { computed, Injectable, signal } from '@angular/core';
import { Post } from '../Model/Post.model';

@Injectable({
  providedIn: 'root'
})
export class PostManagerService {
  //Con la dicitura "#", si rende la variabile privata, rendendola inaccessibile
  //da fuori dalla classe postManagerService
  #postList = signal<Post[]>([]);

  //è come un signal ma, a differenza di #postList, è un signal solamente
  //leggibile e non anche scrivibile.
  posetListComp = computed(() => this.#postList())

  constructor() { }

  //negli array, utilizzando lo spread operator "..." esporta una copia du tutti i
  //valori dell'array, è come ciclare per tutto l'array che fa "array1[i] = array2[i]"
  //semplicemente facendo "array2 = [...array1]"
  generaPost(){
    this.#postList.update((item: Post[]) => {
      return [...item,{
        titolo: "Terza lezione all'AFP ciaoooo",
        body: "Stiamo Morendo dentro UwU cazzo palle ngieshtoughng",
        id: 0,
        userId: Math.random()*100
      }]
    });
  }
}
