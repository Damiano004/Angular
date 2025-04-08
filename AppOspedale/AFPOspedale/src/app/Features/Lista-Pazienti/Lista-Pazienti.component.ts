import { Component, inject } from '@angular/core';
import { AFPOspedaleAPIService } from '../../Core/Service/AFPOspedaleAPI.service';
import { DatePipe, JsonPipe } from '@angular/common';

@Component({
  selector: 'app-Lista-Pazienti',
  imports: [DatePipe],
  templateUrl: './Lista-Pazienti.component.html',
  styleUrls: ['./Lista-Pazienti.component.scss']
})
export class ListaPazientiComponent {
  api = inject(AFPOspedaleAPIService);
}
