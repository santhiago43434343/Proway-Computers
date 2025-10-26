
import { Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { CarrinhoService } from '@services/carrinho.service';
export const routes: Routes = [
  
{
  path: 'produtos/:descricao',
  loadComponent: () =>
     import('./produtos/produtos.component').then(m => m.ProdutosComponent)
},
  
{
  path: 'contato',
  loadComponent: () => 
  import('./contato/contato.component').then(m => m.ContatoComponent)
},


  {
    path: 'carrinho',
    loadComponent: () => 
      import('./carrinho/carrinho.component').then(m => m.CarrinhoComponent)

  },

  {
    path: 'produto/:id',
    loadComponent: () =>
      import('./produtos/detalhes-produto/detalhes-produto.component').then(m => m.DetalhesProdutoComponent)
 
  },

  {
    path: '',
    loadComponent: () =>
      import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  },

  {
    path: 'produtos',
    loadComponent: () =>
      import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  },

  {
    path: 'detalhes-produto/:id',
    loadComponent: () =>
      import('./produtos/detalhes-produto/detalhes-produto.component').then(m => m.DetalhesProdutoComponent)
  },

  {
    path: '**',
    loadComponent: () =>
      import('./nao-encontrado/nao-encontrado.component').then(m => m.NaoEncontradoComponent)
  },

];


  