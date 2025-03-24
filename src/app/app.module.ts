import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { DesaparecidosRoutingModule } from './desaparecidos/desaparecidos-routing.module';
import { AppComponent } from './app.component';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaNaoEncontradaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DesaparecidosRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
