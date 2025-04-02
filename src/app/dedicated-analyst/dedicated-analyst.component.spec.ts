import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DedicatedAnalystComponent } from './dedicated-analyst.component';

describe('DedicatedAnalystComponent', () => {
  let component: DedicatedAnalystComponent;
  let fixture: ComponentFixture<DedicatedAnalystComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DedicatedAnalystComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DedicatedAnalystComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
