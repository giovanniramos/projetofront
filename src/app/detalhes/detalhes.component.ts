import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { DesaparecidosService } from '../services/desaparecidos.service';

import { Desaparecidos, DesaparecidosConteudo } from '../data/desaparecidos';

@Component({
  selector: 'app-detalhes',
  templateUrl: './detalhes.component.html',
  styleUrls: ['./detalhes.component.scss']
})
export class DetalhesComponent implements OnInit, OnDestroy {

  currentId: number;

  content?: DesaparecidosConteudo;

  public fotoPadrao = 'assets/images/desaparecidos2.png';
  public fotoEncontrado = 'assets/images/desaparecidos3.png';

  private subscription: Subscription;

  constructor(
    private toastr: ToastrService,
    private activatedRoute: ActivatedRoute,
    private desaparecidosService: DesaparecidosService
  ) {
  }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      const { id } = params;
      if (!id) {
        return;
      }

      this.currentId = id;
      this.getDesaparecido();
    });
  }

  ngOnDestroy = () =>
    this.subscription.unsubscribe()

  public getDesaparecido(): void {
    this.desaparecidosService
      .obterById(this.currentId)
      .subscribe(
        (response) => {
          const content = response;

          const fotoPadrao = this.fotoPadrao;
          const fotoEncontrado = this.fotoEncontrado;

          const { id, nome, idade, sexo, vivo, urlFoto, ultimaOcorrencia } = content;

          const { ocoId, encontradoVivo, dataLocalizacao, dtDesaparecimento, localDesaparecimentoConcat } = ultimaOcorrencia;

          const localizado = (dataLocalizacao !== null);
          content.localizado = localizado;

          const situacao = localizado ? 'Localizad' : 'Desaparecid';
          content.situacao = situacao + (sexo.toUpperCase() === 'FEMININO' ? 'a' : 'o');

          content.ocorrencia = {};
          content.ocorrencia.ocoId = ocoId;
          content.ocorrencia.encontradoVivo = encontradoVivo;
          content.ocorrencia.dataLocalizado = dataLocalizacao;
          content.ocorrencia.dataDesaparecido = dtDesaparecimento;
          content.ocorrencia.localDesaparecido = localDesaparecimentoConcat;

          const entrevista = ultimaOcorrencia.ocorrenciaEntrevDesapDTO;
          content.ocorrencia.informacao = entrevista && entrevista.informacao || undefined;
          content.ocorrencia.vestimenta = entrevista && entrevista.vestimentasDesaparecido || undefined;

          for (const item of Object.keys(content)) {
            const value = content[item];

            if (item === 'urlFoto') {
              content.urlFoto = content.urlFoto != null ? content.urlFoto : fotoEncontrado;
            }
          }

          this.content = content;
        },
        (error) =>
          this.toastr.error(error, 'ERROR!')
      );
  }

}
