import { Iproduto } from '@interfaces/iproduto'; 

export interface IprodutoCarrinho extends Iproduto {
  quantidade: number;
}