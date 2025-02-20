import { Injectable } from '@angular/core';
//injectable significa che i metodi e le variabili, anche senza inizializzare un
//oggetto di questo tipo di classe
@Injectable({
  providedIn: 'root'
})
export class PostHttpService {

  constructor() { }
}
