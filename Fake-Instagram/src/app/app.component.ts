import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStateManagerService } from './Core/service/state-manager/app-state-manager.service';
import { ButtonModule } from 'primeng/button';
import { LogicalError } from './Core/Error_Manager/LogicalError';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appstate = inject(AppStateManagerService)

  public lanciaErrore(){
    throw new Error("Errore lanciato dalla home");
  }

  public lanciaErroreLogico(){
    throw new LogicalError("Logica fallacea", "AppComponent");
  }
}
