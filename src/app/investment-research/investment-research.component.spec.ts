import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentResearchComponent } from './investment-research.component';

describe('InvestmentResearchComponent', () => {
  let component: InvestmentResearchComponent;
  let fixture: ComponentFixture<InvestmentResearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvestmentResearchComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentResearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
