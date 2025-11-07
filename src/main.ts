import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { router } from './app/app.routes'; // Importa o roteador já configurado
import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [router] // Usa o roteador com HashLocationStrategy
})
.catch(err => console.error(err));
