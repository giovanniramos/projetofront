import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CamelcasePipe } from '../pipes/camelcase.pipe';
import { StatecasePipe } from '../pipes/statecase.pipe';
import { ReplacecasePipe } from '../pipes/replacecase.pipe';

@NgModule({
  declarations: [
    CamelcasePipe,
    StatecasePipe,
    ReplacecasePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CamelcasePipe,
    StatecasePipe,
    ReplacecasePipe
  ]
})
export class SharedModule { }
