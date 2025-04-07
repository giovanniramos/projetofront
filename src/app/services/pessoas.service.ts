import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { MessageService } from './message.service';

import { PESSOAS } from '../data/mock-pessoas';
import { Pessoas } from '../data/pessoas';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  private pessoas: Pessoas[] = [];

  constructor(
    private messageService: MessageService
  ) {
  }

  getPessoasMock(): Observable<Pessoas[]> {
    const pessoas = of(PESSOAS);

    this.messageService.add('PessoasService: fetched Pessoas');

    return pessoas;
  }

}
