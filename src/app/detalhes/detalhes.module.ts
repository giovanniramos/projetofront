import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared-modules/shared.module';

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
    NgxMaskModule.forRoot(),
  ]
})
export class DetalhesModule { }
