import { IsNotEmpty, IsString, IsUrl } from 'class-validator';

export class CaracteristicaProdutoDTO {
  @IsString()
  @IsNotEmpty({ message: 'Nome da cadasterística não pode ser vazio' })
  nome: string;

  @IsString()
  @IsNotEmpty({ message: 'Descrição da característica não pode ser vazio' })
  descricao: string;
}

export class ImagemProdutoDTO {
  @IsUrl()
  url: string;
  @IsString()
  @IsNotEmpty({ message: 'Descrição da imagem não pode ser vazia' })
  descricao: string;
}
