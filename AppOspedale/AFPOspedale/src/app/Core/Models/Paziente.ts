export interface Paziente{
  id: number,
  codice: string,
  codice_colore: CodiceCOlore,
  stato: StatoPaziete | null,
  reparto_id: number | null,
  anagrafica_id: number
  nome: string,
  cognome: string,
  data_nascita: Date,
  codiceFiscale: string

}

export type CodiceCOlore = 'BIANCO' |
'VERDE' |
'AZZURRO' |
'ARANCIONE' |
'ROSSO' |
'NON FORNITO';

export type StatoPaziete = 'IN CARICO' |
'TRASFERITO' |
'DIMESSO' |
'NON FORNITO';
