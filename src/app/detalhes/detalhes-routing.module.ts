import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetalhesComponent } from './detalhes.component';

const routes: Routes = [
  { path: '', component: DetalhesComponent },
  //{ path: 'desaparecidos-detalhes-inclusao', component: DetalhesInclusaoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetalhesRoutingModule { }
