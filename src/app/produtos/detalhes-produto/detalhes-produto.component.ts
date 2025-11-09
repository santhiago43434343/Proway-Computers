import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { IprodutoCarrinho } from '@interfaces/iproduto-carrinho';
import { Iproduto } from '@interfaces/iproduto';
import { produtos } from '../../../interfaces/produtos';
import { ProdutosService } from '@services/produtos.service';
import { ParamMap } from '@angular/router';
import { NaoEncontradoComponent } from '@pages/nao-encontrado/nao-encontrado.component';
import { CarrinhoService } from '@services/carrinho.service';
import { NotificacaoService } from '@services/notificacao.service';

@Component({
  selector: 'app-detalhes-produto',
  standalone: true,
  imports: [CommonModule, RouterModule, ],
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.scss']
})
export class DetalhesProdutoComponent implements OnInit {
  produtoId: number | null = null;
   produto!: Iproduto; 
   quantidade: number = 1;
   produtoSelecionado: Iproduto | undefined;
   imgPath: string = '';

  @ViewChild ('quantidadeInput') quantidadeInput!: ElementRef<HTMLInputElement>;

  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private produtosService: ProdutosService,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService /*interação com:: carrinho.service.ts */
  
  ) {}

  ngOnInit(): void {

    const routeParams: ParamMap = this.route.snapshot.paramMap;
    const produtoId: number = Number (routeParams.get("id"));
    const idParam = this.route.snapshot.paramMap.get('id');
    const id = Number(idParam);
    this.produtoId = isNaN(id) ? null : id;
    // Captura o ID da rota
    this.produtoId = Number(this.route.snapshot.paramMap.get('id'));
    this.produtosService.getById(produtoId);
    console.log('ID do produto:', this.produtoId);
  
    this.produtoSelecionado = produtos.find(p => p.id === this.produtoId);
   
   if (!this.produtoSelecionado) {
     this.router.navigateByUrl('/404');
     return;

   }
   
    this.imgPath = this.produtoSelecionado?.imagem ?? '';
    // Monta o caminho da imagem corretamente
  }

  adicionarAoCarrinho(): void {
  const quantidade = Number(this.quantidadeInput.nativeElement.value);

  if (this.produtoSelecionado) {
    const produtoComQuantidade: IprodutoCarrinho = {
      id: this.produtoSelecionado.id,
      nome: this.produtoSelecionado.nome,
      descricao: this.produtoSelecionado.descricao,
      preco: this.produtoSelecionado.preco,
      descricaoPreco: this.produtoSelecionado.descricaoPreco,
      imagem: this.produtoSelecionado.imagem,
      desconto: this.produtoSelecionado.desconto,
      quantidade
    };

    this.carrinhoService.adicionarAoCarrinho(produtoComQuantidade);
    this.notificacaoService.notificar("Produto adicionado ao carrinho!");
    console.log("Produto com imagem:", produtoComQuantidade);
   }
  }
 }

/*adicionarAoCarrinho(): void {
  const quantidade = Number(this.quantidadeInput.nativeElement.value);

  if (this.produtoSelecionado) {
    console.log('Produto adicionado ao carrinho:', {
      produto: this.produtoSelecionado,
      quantidade
    });

    const produtoComQuantidade: IprodutoCarrinho = {
      ...this.produtoSelecionado,
      quantidade
    };

    this.carrinhoService.adicionarAoCarrinho(produtoComQuantidade);
    this.notificacaoService.notificar("Produto adicionado ao carrinho!");
    }
  }
}*/