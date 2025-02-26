import { Component, effect, inject, OnInit } from '@angular/core';
import { AppStateManagerService } from '../../Core/service/state-manager/app-state-manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  readonly #appState = inject(AppStateManagerService);
  readonly #router = inject(Router);

  constructor(){
    effect(() => {
      if(this.#appState.state()!== 'ERROR'){
        this.#router.navigate(["/home"]);
      }
    })
  }

  ngOnInit() {
  }

}
