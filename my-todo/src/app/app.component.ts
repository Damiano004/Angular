import { JsonPipe } from '@angular/common';
import { compileNgModule } from '@angular/compiler';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './item-list/item-list.component';

@Component({
  selector: 'app-root',
  imports: [ItemListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title: string = 'my-todo';
  uf: string = "UF12:Angular";

  nStudenti: number = 19;
  studentiTotli: number = 19;
  studPresente: boolean = true;

  listaStudenti: string[] = ['Mario', 'Luigi', 'Mael', 'Serena'];
  listaStudentiPresenti: string[] =['Luigi'];

  //questo è un metodo (specificare sempre il tipo di parametro)
  //tipo any: puoi mettere tutti i tipi che vuoi
  stampaStudente(nome:string, matricola:number):string{
    return `Studente ${nome} con Matricola ${matricola}`
  }

  studente1: Studente = {
    nome: "Mario",
    cognome: "Rossi",
    matricola: 123456,
    attivo: true
  };

  studente2: Studente = {
    nome: "Giovanni",
    cognome: "Bianchi",
    matricola: 789191,
    attivo: false
  };

  studente3: Studente = {
    nome: "Serena",
    cognome: "Neri",
    matricola: 578439,
    attivo: true
  };

  listaOggettiStudenti: Studente[] = [this.studente1, this.studente2, this.studente3]

  //I SIGNALS (devi prima importarlo da @angular/core)
  //sono molto utili perché, quando devo cambiare un valore, normalmente tutta la pagina
  //verrebbe aggiornata, ma quando devo cambiare un signal, viene aggiornato solamente quel valore
  nome: string = "Anduin";
  //tra parentesi quadre: tipologia del signal
  //tra parentesi tonde: valore del signal
  cognome = signal<string>("Wrynn");
  contatore = signal<number>(0);

  setCognome(){
    //i signal sono semplicemente delle classi, quindi cognome è un oggetto
    //cognome è semplicemente un oggetto con dei metodi
    this.cognome.set("Rossi");
  }

  incrementa(){
    //in update puoi inserire una funzione che ritorni un valore, questo verrà
    //assegnato al signal
    this.contatore.update(val => val+1)
  }

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

//questo è un nuovo oggetto
//export significa che l'interfaccia è importabile da altri file
export interface Studente{
  nome: string,
  cognome: string,
  matricola: number,
  attivo: boolean
}

export interface Post{
  titolo: string,
  body: string,
  id: number,
  userId: number
}
