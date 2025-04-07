import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: '', loadChildren: async () => (await import('./desaparecidos/desaparecidos.module')).DesaparecidosModule },
  { path: 'painel', loadChildren: async () => (await import('./painel/painel.module')).PainelModule },
  { path: 'detalhes', loadChildren: async () => (await import('./detalhes/detalhes.module')).DetalhesModule },
  { path: '', redirectTo: 'painel', pathMatch: 'full' },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
