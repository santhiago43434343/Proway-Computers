import { bootstrapApplication } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { router } from './app/app.routes'; // Importa o roteador já configurado
import 'zone.js';
import { APP_BASE_HREF } from '@angular/common'; 

bootstrapApplication(AppComponent, {

      providers: [
    router,
    provideAnimations(),
    provideHttpClient(),
    { provide: APP_BASE_HREF, useValue: environment.baseHref }
  ],
 // Usa o roteador com HashLocationStrategy

})
.catch(err => console.error(err));
