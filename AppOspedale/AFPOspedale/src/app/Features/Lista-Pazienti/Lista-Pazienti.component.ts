import { Component, inject } from '@angular/core';
import { AFPOspedaleAPIService } from '../../Core/Service/AFPOspedaleAPI.service';
import { DatePipe, JsonPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-Lista-Pazienti',
  imports: [DatePipe, RouterLink],
  templateUrl: './Lista-Pazienti.component.html',
  styleUrls: ['./Lista-Pazienti.component.scss']
})
export class ListaPazientiComponent {
  api = inject(AFPOspedaleAPIService);
}
