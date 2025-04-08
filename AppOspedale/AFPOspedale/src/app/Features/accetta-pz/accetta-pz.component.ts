import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { CodiceCOlore, CreazionePaziente, StatoPaziete } from '../../Core/Models/Paziente';
import { FormsModule } from '@angular/forms';
import { AFPOspedaleAPIService } from '../../Core/Service/AFPOspedaleAPI.service';

@Component({
  selector: 'app-accetta-pz',
  imports: [FormsModule],
  templateUrl: './accetta-pz.component.html',
  styleUrls: ['./accetta-pz.component.scss']
})
export class AccettaPzComponent {
  readonly #api = inject(AFPOspedaleAPIService);

  readonly nome = signal<string>('');
  readonly cognome = signal<string>('');
  readonly dataNascita = signal<string>('');
  readonly dataNascitaParse = computed(() =>(
    this.dataNascita() ? new Date(this.dataNascita()) : new Date('1970-01-01'))
  );
  readonly codiceFiscale = signal<string>('');
  readonly codiceColore = signal<CodiceCOlore>('NON FORNITO');
  readonly codicePaziente = signal<string>('');
  readonly statoPaziente = signal<StatoPaziete>('NON FORNITO');

  calcolaCodicePz(): string{
    return this.nome().charAt(0)+
      this.cognome().charAt(0)+
      this.dataNascitaParse().getFullYear();
  }

  accettaPaziente(): void{
    let pzTmp: CreazionePaziente = {
      nome: this.nome(),
      congome: this.cognome(),
      dataNascita: this.dataNascitaParse(),
      codiceFiscale: this.codiceFiscale(),
      CodiceColore: this.codiceColore(),
      stato: 'IN CARICO',
      codice: this.calcolaCodicePz()
    };
  }

  validateInput(): boolean{
    if(!this.nome()) return false;
    if(!this.cognome()) return false;
    if(
      !this.codiceFiscale()||
      this.codiceFiscale.length !== 16
    ) return false;
    if(this.codiceColore() ==='NON FORNITO') return false;
    //if(!this.dataNascitaParse()) return false;
    return true;
  }
}
