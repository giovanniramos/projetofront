import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DesaparecidosRoutingModule } from './desaparecidos/desaparecidos-routing.module';
import { PainelRoutingModule } from './painel/painel-routing.module';
import { DetalhesRoutingModule } from './detalhes/detalhes-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    DesaparecidosRoutingModule,
    PainelRoutingModule,
    DetalhesRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
