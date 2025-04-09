import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';

import { ToastrService } from 'ngx-toastr';

import { DesaparecidosService } from '../services/desaparecidos.service';

import { Pessoas } from '../data/pessoas';
import { Desaparecidos, DesaparecidosConteudo } from '../data/desaparecidos';

import { PagingConfig } from '../models/paging-config.model';
import { PagingFilter } from '../models/paging-filter.model';

import * as actions from '../store/app.actions';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.scss']
})
export class PainelComponent implements PagingConfig {

  itemsPerPage = 12;
  currentPage = 0;
  currentIndex = 0;
  totalItems = 0;

  pageSizes = [12, 18, 24];
  pageSize = 12;
  page = 0;

  contentReady = false;
  searchLoading = false;

  pagingConfig: PagingConfig = {} as PagingConfig;

  listContent: Desaparecidos[] = [];
  currentContent?: DesaparecidosConteudo;

  fotoPadrao = 'assets/images/desaparecidos2.png';
  fotoEncontrado = 'assets/images/desaparecidos3.png';

  submitted = false;
  painelForm: FormGroup;

  constructor(
    private store: Store,
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private desaparecidosService: DesaparecidosService
  ) {
    this.painelForm = formBuilder.group({
      nome: [''],
      sexo: [''],
      faixa: [''],
      status: ['']
    });

    this.pagingConfig = new PagingConfig(this.itemsPerPage, this.currentPage, this.totalItems);

    this.store.dispatch(actions.showMessage({ show: true }));
  }

  get nome(): any { return this.painelForm.get('nome'); }
  get sexo(): any { return this.painelForm.get('sexo'); }
  get faixa(): any { return this.painelForm.get('faixa'); }
  get status(): any { return this.painelForm.get('status'); }

  public onSubmit(pagingFilter: PagingFilter): void {
    if (!this.painelForm.valid) {
      this.submitted = true;
      return;
    } else {
      this.getDesaparecidos();
    }
  }

  public getDesaparecidos(): void {
    const form = this.painelForm;

    const pessoa = this.nome.value;
    const sexo = this.sexo.value;
    const faixa = this.faixa.value;
    const status = this.status.value;
    const page = this.page;
    const pageSize = this.pageSize;

    this.desaparecidosService
      .getFilter(pessoa, sexo, faixa, status, page, pageSize)
      .subscribe(
        (response) => {
          const { content, totalElements, empty } = response;

          this.searchLoading = true;
          this.contentReady = (empty === true) ? false : true;

          if (this.searchLoading && !this.contentReady) {
            this.toastr.info('Sem resultados na sua busca...');
          }

          this.pagingConfig.totalItems = totalElements;

          const fotoPadrao = this.fotoPadrao;
          const fotoEncontrado = this.fotoEncontrado;

          content.map((val) => {
            const { id, nome, vivo, urlFoto, ultimaOcorrencia } = val;

            const { dataLocalizacao, encontradoVivo, localDesaparecimentoConcat } = ultimaOcorrencia;

            const localizado = (dataLocalizacao !== null);
            val.localizado = localizado;

            const situacao = localizado ? 'Localizad' : 'Desaparecid';
            val.situacao = situacao + (sexo.toUpperCase() === 'FEMININO' ? 'a' : 'o');

            val.urlFoto = val.urlFoto != null ? val.urlFoto : fotoEncontrado;

            const localDesaparecimento = localDesaparecimentoConcat;
            const [local, cidade] = localDesaparecimento.split(' - ');
            val.cidade = cidade === undefined ? local : cidade;

            return val;
          });

          this.listContent = content;
        },
        (error) =>
          this.toastr.error(error, 'ERROR!')
      );
  }

  public handlePageChange(event: number): void {
    this.page = event - 1;
    this.pagingConfig.currentPage = event;

    this.getDesaparecidos();
  }

  public handlePageSizeChange(event: any): void {
    this.pagingConfig.itemsPerPage = event.target.value;
    this.pagingConfig.currentPage = 1;

    this.getDesaparecidos();
  }

  public handleSearchChange(): void {
    this.page = 0;
    this.contentReady = false;
    this.searchLoading = false;
    this.pagingConfig.totalItems = -1;
    this.pagingConfig.currentPage = 0;
  }

  public setActiveContent(content: DesaparecidosConteudo, index: number): void {
    this.currentIndex = index;
    this.currentContent = content;
  }

}
