import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesaparecidosComponent } from './desaparecidos.component';
import { PainelComponent } from './painel/painel.component';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { InclusaoComponent } from './detalhes/inclusao/inclusao.component';
import { PaginaNaoEncontradaComponent } from '../pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'home', component: DesaparecidosComponent },
  { path: 'desaparecidos-painel', component: PainelComponent },
  { path: 'desaparecidos-detalhes', component: DetalhesComponent },
  { path: 'desaparecidos-detalhes-inclusao', component: InclusaoComponent },
  { path: '', redirectTo: 'desaparecidos-painel', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesaparecidosRoutingModule { }
