import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared-modules/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { DesaparecidosRoutingModule } from './desaparecidos-routing.module';

import { DesaparecidosComponent } from './desaparecidos.component';

@NgModule({
  declarations: [
    DesaparecidosComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    DesaparecidosRoutingModule
  ]
})
export class DesaparecidosModule { }
