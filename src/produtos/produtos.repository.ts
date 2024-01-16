import { Injectable } from '@nestjs/common';

@Injectable()
export class ProdutosRepository {
  private produtos = [];
  async create(dadosProdutos) {
    this.produtos.push(dadosProdutos);
    // return 'This action adds a new produto';
  }

  async findAll() {
    return this.produtos;
  }

}
