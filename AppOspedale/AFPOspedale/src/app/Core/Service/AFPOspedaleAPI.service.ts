import { computed, inject, Injectable, signal } from '@angular/core';
import { CreazionePaziente, Paziente } from '../Models/Paziente';
import { HttpClient } from '@angular/common/http';
import { HttpRes } from '../Models/ResManager';
import { finalize, map, retry } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AFPOspedaleAPIService {
  readonly #URL = "http://localhost:3000";
  readonly #router = inject(Router);

  readonly #listaPz = signal<Paziente[]>([]);
  readonly #http = inject(HttpClient);

  listaPz = computed(() => this.#listaPz());

  getListaPazienti(): void{
    this.#http.get<HttpRes>(this.#URL+"/lista-pz")
    .pipe(
      retry(3),
      map((res) => JSON.parse(res.body as string) as Paziente[])
    )
    .subscribe((data) => this.#listaPz.set(data));
  }

  trasferisciPaziente(idPaziente: number): void{
    this.#http.put<HttpRes>(this.#URL+'/trasferisci-pz/'+idPaziente,{})
    .pipe(
      retry(3),
      // finalize fa in modo che la funzione inserita qui dentro venga eseguita sia che la chiamata fallisca che vada a buon fine
      finalize(() => this.getListaPazienti())
    )
    .subscribe(res => {
      if(res.state === 'KO'){
        console.error(res.error);

      }

    });
  }

  accettaPaziente(pz: CreazionePaziente): void{
    this.#http.post<HttpRes>(this.#URL+'/accetta-pz',pz)
    .pipe(
      retry(3),
      finalize(() => this.getListaPazienti())
    )
    .subscribe((data) =>{
      if(data.state === 'KO'){
        console.error(data.error);
      }
      this.#router.navigate(['/lista-pz'])
    }
    );
  }

  dimettiaPaziente(idPaziente: number): void{
    throw new Error("Not implemented yet");
  }


}
