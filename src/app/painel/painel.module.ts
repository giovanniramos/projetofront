import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared-modules/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

import { PainelRoutingModule } from './painel-routing.module';

import { PainelComponent } from './painel.component';

@NgModule({
  declarations: [
    PainelComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    PainelRoutingModule,
    NgxPaginationModule,
  ]
})
export class PainelModule { }
