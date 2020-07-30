import { TestBed } from '@angular/core/testing';

import { CentroPracticaService } from './centro-practica.service';

describe('CentroPracticaService', () => {
  let service: CentroPracticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentroPracticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
