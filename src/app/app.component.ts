import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component.';
import { CarrinhoComponent } from "./carrinho/carrinho.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, MatToolbarModule,],
  templateUrl: './app.component.html',
  /*template: `<router-outlet></router-outlet>`,*/
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected readonly title = signal('ecommerce');
}
