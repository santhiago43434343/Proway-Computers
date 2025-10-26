import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import 'zone.js';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)]
})
.catch(err => console.error(err));





















/*import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.component.config.js';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes.js';
import 'zone.js';

bootstrapApplication(AppComponent,{
    providers: [provideRouter(routes)]
})
.catch(err => console.error(err)); */
