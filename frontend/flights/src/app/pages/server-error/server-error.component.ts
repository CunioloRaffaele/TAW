import { Component } from '@angular/core';

@Component({
  selector: 'app-server-error',
  standalone: true,
  template: `<h2>Errore di connessione al server</h2>
             <p>Il servizio non è disponibile. Riprova più tardi.</p>`,
})
export class ServerErrorComponent {}
