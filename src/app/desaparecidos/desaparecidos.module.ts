import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesaparecidosRoutingModule } from './desaparecidos-routing.module';
import { DesaparecidosComponent } from './desaparecidos.component';
import { PainelComponent } from './painel/painel.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { InclusaoComponent } from './detalhes/inclusao/inclusao.component';

@NgModule({
  declarations: [
    DesaparecidosComponent,
    PainelComponent,
    DetalhesComponent,
    InclusaoComponent
  ],
  imports: [
    CommonModule,
    DesaparecidosRoutingModule
  ]
})
export class DesaparecidosModule { }
