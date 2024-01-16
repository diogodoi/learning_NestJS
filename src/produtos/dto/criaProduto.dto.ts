import { CaracteristicaProdutoDTO, ImagemProdutoDTO } from "./caracteristicaProduto.dto";


export class CriaProdutoDTO {
    nome: string;
    valor: number;
    quantidade: number;
    descricao: string;
    caracteristicas: CaracteristicaProdutoDTO[];
    imagens: ImagemProdutoDTO[];
    categoria: string;
}