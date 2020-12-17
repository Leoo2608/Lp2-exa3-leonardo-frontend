import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaVendedorComponent } from './vista-vendedor.component';

describe('VistaVendedorComponent', () => {
  let component: VistaVendedorComponent;
  let fixture: ComponentFixture<VistaVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
