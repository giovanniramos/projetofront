import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared-modules/shared.module';

import { ToastrModule } from 'ngx-toastr';

import { DetalhesRoutingModule } from './detalhes-routing.module';

import { DetalhesComponent } from './detalhes.component';
import { DetalhesInclusaoComponent } from './detalhes-inclusao/detalhes-inclusao.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    DetalhesComponent,
    DetalhesInclusaoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DetalhesRoutingModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-top-right',
      preventDuplicates: false,
      progressBar: true,
      closeButton: true,
      onActivateTick: false
    }),
    NgxMaskModule.forRoot()
  ]
})
export class DetalhesModule { }
