import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProdutoEntity } from './produtos.entity';
import { Repository } from 'typeorm';
import { ListaProdutoDTO } from './dto/listaProduto.dto';
import { AtualizaProdutoDTO } from './dto/atualizaProduto.dto';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtosRepository: Repository<ProdutoEntity>,
  ) {}

  async criaProduto(produtoEntity: ProdutoEntity) {
    await this.produtosRepository.save(produtoEntity);
  }
  async listProdutos() {
    const produtosSalvos = await this.produtosRepository.find({
      relations: {
        imagens: true,
        caracteristicas: true,
      },
    });
    const produtosLista = produtosSalvos.map(
      (produto) =>
        new ListaProdutoDTO(
          produto.id,
          produto.nome,
          produto.caracteristicas,
          produto.imagens,
        ),
    );
    return produtosLista;
  }

  async atualizaProduto(id: string, novosDados: AtualizaProdutoDTO) {
    const entityName = await this.produtosRepository.findOneBy({ id });
    Object.assign(entityName, novosDados);
    await this.produtosRepository.save(entityName);
  }

  async deletaProduto(id: string) {
    await this.produtosRepository.delete(id);
  }
}
