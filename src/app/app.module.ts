import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { PainelRoutingModule } from './painel/painel-routing.module';
import { DetalhesRoutingModule } from './detalhes/detalhes-routing.module';
import { DesaparecidosRoutingModule } from './desaparecidos/desaparecidos-routing.module';

import { AppComponent } from './app.component';
import { PaginaTopoComponent } from './pagina-topo/pagina-topo.component';

import { NgxMaskModule, IConfig } from 'ngx-mask';
export const options: Partial<null | IConfig> | (() => Partial<IConfig>) = null;

import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import * as fromApp from './store/app.reducer';

registerLocaleData(localePT);

@NgModule({
  declarations: [
    AppComponent,
    PaginaTopoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PainelRoutingModule,
    DetalhesRoutingModule,
    DesaparecidosRoutingModule,
    NgxMaskModule.forRoot(),
    StoreModule.forRoot({ data: fromApp.AppReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    DatePipe,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
