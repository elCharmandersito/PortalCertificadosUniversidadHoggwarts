import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPedidoComponent } from './detail-pedido.component';

describe('DetailPedidoComponent', () => {
  let component: DetailPedidoComponent;
  let fixture: ComponentFixture<DetailPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPedidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
