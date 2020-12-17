import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaventaComponent } from './vistaventa.component';

describe('VistaventaComponent', () => {
  let component: VistaventaComponent;
  let fixture: ComponentFixture<VistaventaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VistaventaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaventaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
