import { Component, input } from '@angular/core';
import { Studente } from '../app.component'

@Component({
  //il selettore è utilizzato per riferirsi al componente nel momento in cui si vuole richiamarlo nell'HTML
  selector: 'app-item-list',
  imports: [],
  //si riferisce al codice HTML che conterrà il componente
  templateUrl: './item-list.component.html',
  //si riferisce al foglio di stile che utilizzerà il componente
  styleUrl: './item-list.component.scss'
})
export class ItemListComponent {
  //definisce una proprietà che consente di trasportare dei dati
  //con input.requred la rende obbligatoria, altrimenti è opzionale
  //tra le parentesi angolari metti la tipologia di attributo che si vuole come input
  studente = input.required<Studente>();
}
