import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesaparecidosComponent } from './desaparecidos.component';
import { DetalhesComponent } from '../detalhes/detalhes.component';
import { DetalhesInclusaoComponent } from '../detalhes/detalhes-inclusao/detalhes-inclusao.component';

const routes: Routes = [
  { path: '', component: DesaparecidosComponent },
  { path: 'detalhes/:id', component: DetalhesComponent },
  { path: 'detalhes/inclusao/:id/:ocoid', component: DetalhesInclusaoComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesaparecidosRoutingModule { }
