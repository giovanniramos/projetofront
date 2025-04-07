export class Desaparecidos {
  totalPages: number;
  totalElements: number;
  pageable: Pageable = new Pageable();
  numberOfElements: number;
  first: boolean;
  last: boolean;
  size: number;
  content: Array<DesaparecidosConteudo> = new Array<DesaparecidosConteudo>();
  number: number;
  sort: Sort = new Sort();
  empty: boolean;
}

export class DesaparecidosConteudo {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto: string;
  ultimaOcorrencia: DesaparecidoOcorrencia = new DesaparecidoOcorrencia();
}

export class DesaparecidoOcorrencia {
  dtDesaparecimento: any;
  dataLocalizacao: any;
  encontradoVivo: boolean;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: DesaparecidoOcorrenciaEntrevista = new DesaparecidoOcorrenciaEntrevista();
  listaCartaz: string;
  ocoId: number;
}

export class DesaparecidoOcorrenciaEntrevista {
  informacao: string;
  vestimentasDesaparecido: string;
}

class Pageable {
  pageNumber: number;
  pageSize: number;
  sort: Sort = new Sort();
  offset: number;
  unpaged: boolean;
  paged: boolean;
}

class Sort {
  unsorted: boolean;
  sorted: boolean;
  empty: boolean;
}
