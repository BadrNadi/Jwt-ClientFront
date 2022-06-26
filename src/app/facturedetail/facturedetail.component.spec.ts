import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturedetailComponent } from './facturedetail.component';

describe('FacturedetailComponent', () => {
  let component: FacturedetailComponent;
  let fixture: ComponentFixture<FacturedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturedetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
