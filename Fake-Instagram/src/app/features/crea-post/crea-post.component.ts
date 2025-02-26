import { PostManagerService } from '../../Core/service/post-manager/post-manager.service';
import { Component, inject, model, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { Post } from '../../Core/Model/Post.model';

@Component({
  selector: 'app-crea-post',
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './crea-post.component.html',
  styleUrls: ['./crea-post.component.css']
})
export class CreaPostComponent {
    PostManagerSrv = inject(PostManagerService);

    // questi sono dei signal speciali utilizzati per l'interattività del codice
    // mettendo required la tipologia è sicuramente stringa, e non stringa | undefined
    titolo = model.required<string>();
    body = model.required<string>();
    userID = model.required<string>();

    id = model<string>("-999");

    // titolo = new FormControl<string>('');
    // body = new FormControl<string>('');
    // userID = new FormControl<number>(-1);
    convertToNumber(val: string|null){
      return Number(val);
    }

    verificaInput(titolo: string, body: string, userID: string){
      if(this.convertToNumber(userID) < 0) return false
      if(titolo.length <=3) return false
      if(body.length<= 10) return false

      return true
    }

    impostaPostDiDefault(){
      this.titolo.set("Ciao sono il titolo di default")
    }

    modificaPost(){
      let tempPost: Post = {
        titolo: this.titolo(),
        body: this.body(),
        userId: this.convertToNumber(this.userID()),
        id: this.convertToNumber(this.id())
      }
    }
}
