import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-produto-detalhe',
  imports: [],
  templateUrl: './produto-detalhe.html',
  styleUrls: ['./produto-detalhe.scss'],
})
export class ProdutoDetalheComponent implements OnInit  {
   produtoId: number | null= null;

   constructor(private route:ActivatedRoute) {}
  
  
  ngOnInit(): void { /*capturar id da rota e buscar produto */ 
     this.produtoId = Number(this.route.snapshot.paramMap.get('id'));
   console.log('ID do produto', this.produtoId);
    }
}
