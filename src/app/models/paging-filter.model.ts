export class PagingFilter {
  nome: string;
  sexo: string;
  status: string;

  constructor(nome: string, sexo: string, status: string) {
    this.nome = nome;
    this.sexo = sexo;
    this.status = status;
  }
}
