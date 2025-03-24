import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesaparecidosRoutingModule } from './desaparecidos-routing.module';
import { DesaparecidosComponent } from './desaparecidos.component';

@NgModule({
  declarations: [
    DesaparecidosComponent
  ],
  imports: [
    CommonModule,
    DesaparecidosRoutingModule
  ]
})
export class DesaparecidosModule { }
