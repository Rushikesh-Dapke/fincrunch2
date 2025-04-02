import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialModelingComponent } from './financial-modeling.component';

describe('FinancialModelingComponent', () => {
  let component: FinancialModelingComponent;
  let fixture: ComponentFixture<FinancialModelingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialModelingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialModelingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
