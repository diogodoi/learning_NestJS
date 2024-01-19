import { Controller, Get, Post, Body } from '@nestjs/common';
import { ProdutosRepository } from './produtos.repository';
import { CriaProdutoDTO } from './dto/criaProduto.dto';
import { randomUUID } from 'crypto';
import { ProdutoEntity } from './produtos.entity';
import { ProdutoService } from './produto.service';

@Controller('produtos')
export class ProdutosController {
  constructor(
    private readonly produtosRepository: ProdutosRepository,
    private readonly produtoService: ProdutoService,
  ) {}

  @Post()
  async criaNovo(@Body() dadosProduto: CriaProdutoDTO) {
    const produto = new ProdutoEntity();

    produto.id = randomUUID();
    produto.nome = dadosProduto.nome;
    produto.usuarioId = dadosProduto.usuarioId;
    produto.valor = dadosProduto.valor;
    produto.quantidade = dadosProduto.quantidade;
    produto.descricao = dadosProduto.descricao;
    produto.categoria = dadosProduto.categoria;
    produto.caracteristicas = dadosProduto.caracteristicas;
    produto.imagens = dadosProduto.imagens;

    const produtoCadastrado = this.produtoService.criaProduto(produto);
    return produtoCadastrado;
  }

  @Get()
  findAll() {
    return this.produtosRepository.findAll();
  }
}
