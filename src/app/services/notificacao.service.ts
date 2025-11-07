import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
@Injectable({
  providedIn: 'root'
})
export class NotificacaoService {

     constructor(
      private snackBar: MatSnackBar
 ) {}
/*RENDERIZAÇÃO DA MENSAGEM  */
 notificar(mensagem: string ) {
   this.snackBar.open(mensagem, "OK", { 
    duration: 2000,
    verticalPosition: "top",   /*top: topo da pagina  */
    horizontalPosition: "center",
   });

 }
}

 



