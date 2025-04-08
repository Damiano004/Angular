export interface Paziente{
    "id": number,
    "codice": string,
    "codice_colore": CodiceCOlore,
    "stato": StatoPaziete | null,
    "reparto_id": number | null,
    "anagrafica_id": number
}

export type CodiceCOlore = 'BIANCO' | 
'VERDE' | 
'AZZURRO' | 
'ARANCIONE' | 
'ROSSO';

export type StatoPaziete = 'IN CARICO' | 
'TRASFERITO' | 
'DIMESSO';