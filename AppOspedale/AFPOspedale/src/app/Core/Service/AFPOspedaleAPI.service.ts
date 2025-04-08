import { computed, inject, Injectable, signal } from '@angular/core';
import { Paziente } from '../Models/Paziente';
import { HttpClient } from '@angular/common/http';
import { HttpRes } from '../Models/ResManager';
import { map, retry } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AFPOspedaleAPIService {
  readonly #URL = "http://localhost:3000";

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

  accettaPaziente(): void{
    throw new Error("Not implemented yet");
  }

  dimettiaPaziente(idPaziente: number): void{
    throw new Error("Not implemented yet");
  }

  trasferisciPaziente(idPaziente: number): void{
    throw new Error("Not implemented yet");
  }
}
