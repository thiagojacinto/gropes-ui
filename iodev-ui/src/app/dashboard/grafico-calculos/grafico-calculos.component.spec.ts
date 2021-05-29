import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoCalculosComponent } from './grafico-calculos.component';

describe('GraficoCalculosComponent', () => {
  let component: GraficoCalculosComponent;
  let fixture: ComponentFixture<GraficoCalculosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraficoCalculosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoCalculosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
