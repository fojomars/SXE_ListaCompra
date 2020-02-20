import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { lista_compra } from './compra';

describe('Compra', () => {
  let component: lista_compra;
  let fixture: ComponentFixture<lista_compra>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ lista_compra ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(lista_compra);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
