import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PostManagerService } from '../../Core/service/post-manager/post-manager.service';
import { PostCardComponent } from "../../UI/post-card/post-card.component";

@Component({
  selector: 'app-home',
  imports: [RouterLink, PostCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Fake-Instagram';

  postManaverSrv = inject(PostManagerService);


  constructor() { }

  ngOnInit() {
  }

}
