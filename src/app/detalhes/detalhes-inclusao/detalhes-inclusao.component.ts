import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ToastrService } from 'ngx-toastr';

import { DesaparecidosService } from 'src/app/services/desaparecidos.service';

import { OcorrenciaDesaparecido } from './../../interfaces/ocorrencia-desaparecido.interface';

import * as moment from 'moment';

@Component({
  selector: 'app-detalhes-inclusao',
  templateUrl: './detalhes-inclusao.component.html',
  styleUrls: ['./detalhes-inclusao.component.scss']
})
export class DetalhesInclusaoComponent implements OnInit, OnDestroy {

  file: File;
  fileName = '';

  currentId: number;
  currentOcoId: number;

  subscription: Subscription;

  submitted = false;
  detalhesInclusaoForm: FormGroup;

  isModalOpen = false;

  constructor(
    private toastr: ToastrService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private desaparecidosService: DesaparecidosService
  ) {
    this.detalhesInclusaoForm = formBuilder.group({
      informacao: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(140)]],
      descricao: [null, [Validators.required, Validators.minLength(1), Validators.maxLength(140)]],
      data: [null, [Validators.required, Validators.minLength(8)]],
      anexos: [null],
      ocoId: [null, Validators.required],
      id: [null, Validators.required]
    });
  }

  get informacao(): any { return this.detalhesInclusaoForm.get('informacao'); }
  get descricao(): any { return this.detalhesInclusaoForm.get('descricao'); }
  get data(): any { return this.detalhesInclusaoForm.get('data'); }

  ngOnInit(): void {
    this.subscription = this.activatedRoute.params.subscribe((params) => {
      const { id, ocoid } = params;
      if (!ocoid) {
        return;
      }

      this.currentId = id;
      this.currentOcoId = ocoid;

      this.detalhesInclusaoForm.patchValue({
        id: this.currentId,
        ocoId: this.currentOcoId
      });
    });
  }

  ngOnDestroy = () =>
    this.subscription.unsubscribe()

  public onSubmit(ocorrenciaDesaparecido: OcorrenciaDesaparecido): void {
    if (!this.detalhesInclusaoForm.valid) {
      this.validateAllFormFields(this.detalhesInclusaoForm);
      this.submitted = true;
      return;
    } else {
      const form = this.detalhesInclusaoForm;

      const dateBr = ocorrenciaDesaparecido.data;
      const dateBrValid = moment(dateBr, 'DD/MM/YYYY').isValid();

      if (dateBrValid) {
        const dateUs = moment(dateBr, 'DD/MM/YYYY').format('YYYY-MM-DD');
        ocorrenciaDesaparecido.data = dateUs;
      } else {
        this.data.setErrors({ invalid: true });
        this.data.markAsDirty();
        return;
      }

      this.desaparecidosService
        .salvarInformacoesDesaparecido(ocorrenciaDesaparecido, this.file)
        .subscribe(
          (response) => {
            ['informacao', 'descricao', 'data'].map(controlName => {
              form.get(controlName).reset();
            });

            this.isModalOpen = false;

            this.toastr.success('Registro enviado com sucesso...');
          },
          (error) =>
            this.toastr.error(error, 'ERROR!')
        );
    }
  }

  public onFileSelected(event): void {
    this.file = event.target.files[0];

    if (this.file) {
      this.fileName = this.file.name;
    }
  }

  private validateAllFormFields(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }


  public openModal(content): void {
    this.detalhesInclusaoForm.patchValue({
      id: content.id,
      ocoId: content.ocorrencia?.ocoId
    });

    this.isModalOpen = true;
  }

  public closeModal(): void {
    this.detalhesInclusaoForm.patchValue({
      id: '',
      ocoId: ''
    });

    this.isModalOpen = false;
  }

}
