import { computed, inject, Injectable, Signal, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppStateManagerService {

  readonly #internalAppState = signal<AppState>(initialAppState);
  readonly #router = inject(Router);

  public state: Signal<State> = computed<State>(() => this.#internalAppState().state);
  public message: Signal<Message> = computed<Message>(() => this.#internalAppState().message);

  public setToReady(){
    this.#internalAppState.update(() =>{
      return{
        state: "READY",
      }
    });
  }

  public setToLoading(_message?:Message){
    this.#internalAppState.update(() =>{
      return{
        state: "LOADING",
        message: _message
      }
    });
  }

  public setToError(_message:Message){
    this.#internalAppState.update(() =>{
      return{
        state: "ERROR",
        message: _message
      }
    });
    this.#router.navigate(["/not-found"])
  }

}
// creo un tipo dato personalizzato
// in questo caso creo un dato che può essere LOADING, READY o ERROR
// NB: sono molto simili agli enumeratori, MA FANNO SCHIFO quindi è meglio utilizzare
// questa scrittura
type State = "LOADING" | "READY" | "ERROR";
type Message= string | undefined;

// Creo un oggetto che contiene una tipologia di stato e, volendo, un messaggio
interface AppState{
  state: State,
  // parametro opzionale
  message?: Message
}

// è necessario avere uno stato di inizio
const initialAppState: AppState =
{
  state: 'LOADING',
  message: "App in caricamento..."
}
