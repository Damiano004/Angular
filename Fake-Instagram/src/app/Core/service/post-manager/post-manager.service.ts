import { Post } from './../../Model/Post.model';
import { computed, inject, Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, of, retry } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PostManagerService {
  #URL = 'https://jsonplaceholder.typicode.com/posts';

  #http = inject(HttpClient);
  //Con la dicitura "#", si rende la variabile privata, rendendola inaccessibile
  //da fuori dalla classe postManagerService
  #postList = signal<Post[]>([]);
  #router = inject(Router)

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
      this.#postList.update(() => [...this.#postList(),...postList]);
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

  pubblicaPost(titolo: string, body: string, userID: number){
    // utilizzando la partial<oggetto> si possono creare degli oggetti dove sono spacificati dei parametri,
    // quindi volendo potrei creare un oggetto vuoto, il che non va bene
    //let tempPost: Partial<Post> = {
    //  titolo: titolo,
    //  body: body,
    //  userId: userID,
    //}
    // con Omit posso specificare la tipologia di oggetto ed un parametro da rendere opzionale
    let tempPost: Omit<Post,'id'> = {
      titolo: titolo,
      body: body,
      userId: userID,
    };

    this.#http.post<Post>(this.#URL, tempPost).pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return of(null)
      }),
    ).subscribe((res:Post | null)=>{
      if(res !== null){
        this.#postList.update(() => [...this.#postList(), res]);
        this.#router.navigate(['/home'])
      }
    });
  }

  modificaPost(post: Post){
    this.#http.put<Post>(this.#URL+"/"+post.id, post)
    .pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return of<Post[]>([{
          titolo: "Nessun post trovato",
          body: "E3214 - "+err.message,
          id: -1,
          userId: Math.random()*100
        }]);
      })
    )
    .subscribe((updatedPost:Post|Post[]) =>{
        if (Array.isArray(updatedPost)) throw new Error("Unexpected array of posts");

      let oldPost = this.#postList().find((post) => post.id === updatedPost.id);
      if(oldPost === undefined) throw new Error("Post non trovato");

      let oldPostIndex = this.#postList().indexOf(oldPost)
      if(oldPostIndex === -1) throw new Error("Post non trovato");

      this.#postList()[oldPostIndex] = updatedPost;
    });
  }

  eliminaPost(id:number){
    this.#http.delete(this.#URL+"/"+id)
    .pipe(
      retry(3),
      catchError((err) => {
        console.log(err);
        return of<Post[]>([{
          titolo: "Nessun post trovato",
          body: "E3214 - "+err.message,
          id: -1,
          userId: Math.random()*100
        }]);
      })
    )
    .subscribe((data) =>{
      this.#postList.update((oldlist: Post[]) =>{
        this.#postList().filter((p) => p.id !== id)
      })
    })
  }
}
