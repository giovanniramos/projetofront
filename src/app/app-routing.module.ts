import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const routes: Routes = [
  { path: 'desaparecidos', loadChildren: async () => (await import('./desaparecidos/desaparecidos.module')).DesaparecidosModule },
  { path: 'desaparecidos-painel', loadChildren: () => import('./painel/painel.module').then(m => m.PainelModule) },
  { path: 'desaparecidos-detalhes', loadChildren: () => import('./detalhes/detalhes.module').then(m => m.DetalhesModule) },
  { path: '**', component: PaginaNaoEncontradaComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
