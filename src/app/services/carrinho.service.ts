import { Injectable } from '@angular/core';
import { IprodutoCarrinho } from '../../interfaces/iproduto-carrinho';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {
  itens: IprodutoCarrinho[] = [];

  
  adicionarProduto(produto: IprodutoCarrinho): void {
    this.itens.push(produto);
  }

  obterCarrinho(): IprodutoCarrinho[] {
    const carrinho = localStorage.getItem("carrinho");
    this.itens = carrinho ? JSON.parse(carrinho) : [];
    return this.itens;
  }

  adicionarAoCarrinho(produto: IprodutoCarrinho): void {
    this.itens.push(produto);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));
  }
    /*SOBRESCREVER LocalStorage */
  removerProdutoCarrinho(produtoId: number) {
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho", JSON.stringify(this.itens));


  }
 
limparCarrinho(): void {
    this.itens = [];
    localStorage.removeItem("carrinho");
  }
}
