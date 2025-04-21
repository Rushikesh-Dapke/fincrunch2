import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinancialConsensusComponent } from './financial-consensus.component';

describe('FinancialConsensusComponent', () => {
  let component: FinancialConsensusComponent;
  let fixture: ComponentFixture<FinancialConsensusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FinancialConsensusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinancialConsensusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
