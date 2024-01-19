import { Module } from '@nestjs/common';
import { ProdutosRepository } from './produtos.repository';
import { ProdutosController } from './produtos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from './produtos.entity';
import { ProdutoService } from './produto.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoEntity])],
  controllers: [ProdutosController],
  providers: [ProdutosRepository, ProdutoService],
})
export class ProdutosModule {}
