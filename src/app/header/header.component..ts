import { Component, OnInit } from '@angular/core';
import { CarrinhoService } from '@services/carrinho.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit {
  /*Variavel de controle para o campo busca 
  form search form ou botão de pesquisa de objetos */
   termoBusca = '';
 
  constructor(
    public carrinhoService: CarrinhoService,
    private router: Router //adiciona o Router
  ) {}

  ngOnInit(): void {

    console.log('HeaderComponent inicializado');
  }
}

/*CHAMADA PARA ENUMERAÇÃO DE ICONE CARRINHO EM LOCALHOST
constructor (
    public carrinhoService: CarrinhoService

 */