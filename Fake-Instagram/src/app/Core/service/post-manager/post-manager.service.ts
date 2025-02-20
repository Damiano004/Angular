import { computed, inject, Injectable, signal } from '@angular/core';
import { Post } from '../../Model/Post.model';
import { HttpClient } from '@angular/common/http';
import { catchError, of, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostManagerService {
  #URL = 'https://jsonplaceholder.typicode.com/posts';

  #http = inject(HttpClient);
  //Con la dicitura "#", si rende la variabile privata, rendendola inaccessibile
  //da fuori dalla classe postManagerService
  #postList = signal<Post[]>([]);

  //è come un signal ma, a differenza di #postList, è un signal solamente
  //leggibile e non anche scrivibile.
  posetListComp = computed(() => this.#postList());

  constructor() { }


  recuperaPostViaHTTP(): void{
    this.#http.get<Post[]>(this.#URL)
    //Le pipe sono un insieme di operatori che vengono eseguiti se la chiamata va
    //a buon fine o se va in errore.
    .pipe(
      retry(3),    //se la richiesta va in errore, riprova almeno 2 volte prima di ritornare l'effettivo errore
      catchError((err) => {    //cattura l'errore e non fa "crashare" il sito
        console.log(err);
        return of<Post[]>([{    //ritorna il valore tra parametri sotto la forma di un Observable
          titolo: "Nessun post trovato",
          body: "E3214 - "+err.message,
          id: -1,
          userId: Math.random()*100
        }]);
      })
    )
    .subscribe((postList: Post[]) => {
      console.log(postList);
      this.#postList.set(postList);
    });
  }

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
