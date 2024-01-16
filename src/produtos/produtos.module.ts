import { Module } from '@nestjs/common';
import { ProdutosRepository } from './produtos.repository';
import { ProdutosController } from './produtos.controller';

@Module({
  controllers: [ProdutosController],
  providers: [ProdutosRepository],
})
export class ProdutosModule {}
