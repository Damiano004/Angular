import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppStateManagerService } from './Core/service/state-manager/app-state-manager.service';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  appstate = inject(AppStateManagerService)



}
