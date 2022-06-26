import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturefinaleComponent } from './facturefinale.component';

describe('FacturefinaleComponent', () => {
  let component: FacturefinaleComponent;
  let fixture: ComponentFixture<FacturefinaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturefinaleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturefinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
