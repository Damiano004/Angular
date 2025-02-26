import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStateManagerService {

constructor() { }

}
// creo un tipo dato personalizzato
// in questo caso creo un dato che può essere LOADING, READY o ERROR
// NB: sono molto simili agli enumeratori, MA FANNO SCHIFO quindi è meglio utilizzare
// questa scrittura
type AppState = "LOADING" | "READY" | "ERROR"

const tt: AppState = "LOADING"
