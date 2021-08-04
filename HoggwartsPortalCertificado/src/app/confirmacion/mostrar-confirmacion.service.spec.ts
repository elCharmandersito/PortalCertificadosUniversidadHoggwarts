import { TestBed } from '@angular/core/testing';

import { MostrarConfirmacionService } from './mostrar-confirmacion.service';

describe('MostrarConfirmacionService', () => {
  let service: MostrarConfirmacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MostrarConfirmacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
