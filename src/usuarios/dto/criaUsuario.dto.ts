import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/emailUnico.validator';

export class CriaUsuarioDTO {
  @IsNotEmpty({ message: 'Nome não pode ser vazio.' })
  nome: string;
  @IsEmail(undefined, { message: 'Email informado inválido.' })
  @EmailUnico({ message: 'Já existe um usuário com este email!' })
  email: string;
  @MinLength(6, { message: 'A senha deve ter 6 caracteres.' })
  senha: string;
  id: string;
}
