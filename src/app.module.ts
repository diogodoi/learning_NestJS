import { Module } from '@nestjs/common';
import { UsuarioModule } from './usuarios/usuario.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { ProdutosModule } from './produtos/produtos.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostgresConfigService } from './config/db.config.server';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsuarioModule,
    ProdutosModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: PostgresConfigService,
      inject: [PostgresConfigService],
    }),
  ],
  // providers: [AppService],
})
export class AppModule {}
