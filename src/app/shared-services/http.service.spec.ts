import { TestBed } from '@angular/core/testing';

import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HttpService } from './http.service';

describe('HttpService', () => {
  let httpClient: HttpClient;
  let service: HttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    service = TestBed.inject(HttpService);
  });

  it('should be created', () => {
    expect(httpClient).toBeTruthy();
    expect(service).toBeTruthy();
  });
});
