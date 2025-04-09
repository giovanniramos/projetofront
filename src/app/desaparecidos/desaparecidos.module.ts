import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared-modules/shared.module';

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
