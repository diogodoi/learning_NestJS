import {
  Controller,
  Get,
  Post,
  Body
} from '@nestjs/common';
import { ProdutosRepository } from './produtos.repository';
import { CriaProdutoDTO } from './dto/criaProduto.dto';

@Controller('produtos')
export class ProdutosController {
  constructor(private readonly produtosRepository: ProdutosRepository) { }

  @Post()
  create(@Body() dadosProduto: CriaProdutoDTO) {
    return this.produtosRepository.create(dadosProduto);
  }

  @Get()
  findAll() {
    return this.produtosRepository.findAll();
  }

}
