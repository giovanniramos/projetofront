import { TestBed } from '@angular/core/testing';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HttpService } from '../shared-services/http.service';
import { DesaparecidosService } from './desaparecidos.service';

describe('DesaparecidosService', () => {
  let httpClient: HttpClient;
  let httpService: HttpService;
  let service: DesaparecidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpService = TestBed.inject(HttpService);
    service = TestBed.inject(DesaparecidosService);
  });

  it('should be created', () => {
    expect(httpClient).toBeTruthy();
    expect(httpService).toBeTruthy();
    expect(service).toBeTruthy();
  });
});
