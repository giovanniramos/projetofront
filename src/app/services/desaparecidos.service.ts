import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { HttpService } from '../shared-services/http.service';

@Injectable({
  providedIn: 'root'
})
export class DesaparecidosService {

  private readonly apiUrl = 'https://abitus-api.geia.vip';

  constructor(
    private httpService: HttpService,
    private http: HttpClient
  ) {
  }

  public getFilter(nome: string, sexo: string, faixa: number, status: string, page: number = 0, pageSize: number = 0): Observable<any> {
    let faixaIdadeInicial = 0;
    let faixaIdadeFinal = 0;

    switch (Number(faixa)) {
      case 1:
        faixaIdadeInicial = 0;
        faixaIdadeFinal = 12;
        break;
      case 2:
        faixaIdadeInicial = 13;
        faixaIdadeFinal = 17;
        break;
      case 3:
        faixaIdadeInicial = 18;
        faixaIdadeFinal = 64;
        break;
      case 4:
        faixaIdadeInicial = 65;
        faixaIdadeFinal = 0;
        break;
    }

    let params = `?nome=${nome}&sexo=${sexo}&status=${status}`;
    params += `&faixaIdadeInicial=${faixaIdadeInicial}`;
    params += `&faixaIdadeFinal=${faixaIdadeFinal}`;
    params += `&pagina=${page}&porPagina=${pageSize}`;

    const url = this.apiUrl + '/v1/pessoas/aberto/filtro' + params;

    return this.httpService.get<any>(url);
  }

  public obterById(id: number): Observable<any> {
    const url = this.apiUrl + `/v1/pessoas/${id}`;

    return this.httpService.get(url);
  }

  public obterInformacoesDesaparecido(): Observable<any> {
    const url = this.apiUrl + `/v1/ocorrencias/informacoes-desaparecido`;

    return this.httpService.get(url);
  }

  public salvarInformacoesDesaparecido(ocorrenciaDesaparecido: any, file: File): Observable<any> {
    const url = this.apiUrl + `/v1/ocorrencias/informacoes-desaparecido`;

    const data = JSON.stringify(ocorrenciaDesaparecido);
    const dataParse = JSON.parse(data);

    const formData = new FormData();

    if (typeof file !== 'undefined') {
      formData.append('files', file, file.name);
    }

    for (const key in dataParse) {
      if (typeof dataParse[key] !== 'undefined') {
        const value = dataParse[key];
        formData.append(key, value);
      }
    }

    return this.http.post(url, formData);
  }

}
