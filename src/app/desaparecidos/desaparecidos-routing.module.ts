import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesaparecidosComponent } from './desaparecidos.component';

const routes: Routes = [
  { path: '', component: DesaparecidosComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesaparecidosRoutingModule { }
