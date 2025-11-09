import { Routes } from '@angular/router';
import { provideRouter, withHashLocation } from '@angular/router';

export const routes: Routes = [
  // Redireciona raiz para /produtos evitando 404 
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },

  // Produtos sem parâmetro

  {
  path: '404',
  loadComponent: () =>
    import('./pages/nao-encontrado/nao-encontrado.component').then(m => m.NaoEncontradoComponent)
},

  {
    path: 'produtos',
    loadComponent: () =>
      import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  },

  // Produtos com parâmetro para inibir erro 404 
  {
    path: 'produtos/:descricao',
    loadComponent: () =>
      import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  },

  // Detalhes do produto
  {
    path: 'produto/:id',
    loadComponent: () =>
      import('./produtos/detalhes-produto/detalhes-produto.component').then(m => m.DetalhesProdutoComponent)
  },

  // Carrinho
  {
    path: 'carrinho',
    loadComponent: () =>
      import('./carrinho/carrinho.component').then(m => m.CarrinhoComponent)
  },

  // Contato
  {
    path: 'contato',
    loadComponent: () =>
      import('./contato/contato.component').then(m => m.ContatoComponent)
  },

  // Página não encontrada
  {
    path: '**',
    loadComponent: () =>
      import('./pages/nao-encontrado/nao-encontrado.component').then(m => m.NaoEncontradoComponent)
  }
];

// Configuração para GitHub Pages (hash-based routing)
const isProd = import.meta.env.MODE === 'production';
export const router = provideRouter(routes, withHashLocation());
