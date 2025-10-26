import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Iproduto } from '../../interfaces/iproduto';
import { RouterModule } from '@angular/router';
import { ProdutosService } from '../produtos.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-produtos',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss']
})
export class ProdutosComponent implements OnInit {
  produtos: Iproduto[] = [];

  constructor(
    private produtosService: ProdutosService,
    private route: ActivatedRoute
  ) {}
  
    ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
    const termoBusca = paramMap.get('descricao')?.toLowerCase();
     
    const todosProdutos = this.produtosService.getAll();

    if (termoBusca) {
      this.produtos = todosProdutos.filter(produto =>
       produto.nome.toLowerCase().includes(termoBusca) ||
       produto.descricao.toLowerCase().includes(termoBusca)
    );
    } else {
      this.produtos = todosProdutos;
    }
    
    console.log('produtos exibidos:', this.produtos);
  });

}


  adicionarAoCarrinho(produto: Iproduto): void {
    alert(`${produto.nome} foi adicionado ao carrinho!`);
    console.log('Produto adicionado ao carrinho', produto);
  }
}

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 