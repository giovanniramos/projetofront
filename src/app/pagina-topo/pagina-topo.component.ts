import { Component, Input, inject } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import { showMessage } from '../store/app.actions';
import { selectApp, selectAppState } from '../store/app.selectors';

@Component({
  selector: 'app-pagina-topo',
  templateUrl: './pagina-topo.component.html',
  styleUrls: ['./pagina-topo.component.scss']
})
export class PaginaTopoComponent {

  @Input() isTelaPermitida = false;
  @Input() exibirMensagem: boolean;

  showMessage$: Observable<boolean>;

  constructor(
    private store: Store<any>
  )
  {
    this.showMessage$ = this.store.select(selectApp);
  }

}
