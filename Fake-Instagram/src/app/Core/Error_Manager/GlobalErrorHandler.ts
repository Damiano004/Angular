import { ErrorHandler, inject, Injectable } from "@angular/core";
import { AppStateManagerService } from "../service/state-manager/app-state-manager.service";
import { LogicalError } from "./LogicalError";

@Injectable({     //è necessario inserire queste istruzioni altrimenti nel fare l'inject si creano delle ricorsioni
  providedIn: "root"
})
export class GlobalErrorHandler implements ErrorHandler{
  appstate = inject(AppStateManagerService);

  handleError(error: any): void{


    if(error instanceof LogicalError){
      this.appstate.setToError(error.getMessage());
      console.error("##> ",error.toString())
    }else{
      this.appstate.setToError(error);
      console.error("##> ",error);
    }
  }
}