import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuarios/usuario.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';

@Module({
  imports: [UsuarioModule, ProdutosModule],
  // providers: [AppService],
})
export class AppModule {}
