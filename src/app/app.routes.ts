import { Routes } from '@angular/router';

/*GITHUB PAGES :::: */
import { provideRouter, withHashLocation } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'produtos', pathMatch: 'full' },

  // Produtos
  {
    path: 'produtos/:descricao',
    loadComponent: () =>
      import('./produtos/produtos.component').then(m => m.ProdutosComponent)
  },
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

  // Página não encontrada (deve ser a última)
  {
    path: '**',
    loadComponent: () =>
      import('./pages/nao-encontrado/nao-encontrado.component').then(m => m.NaoEncontradoComponent)
  }
];

/* PARA GITHUB PAGES ::::::::RENDERIZAÇÃO E NAVEGAÇÃO 
DE ROTAS  */
export const router = provideRouter (routes, withHashLocation());