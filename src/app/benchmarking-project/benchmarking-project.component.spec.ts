import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BenchmarkingProjectComponent } from './benchmarking-project.component';

describe('BenchmarkingProjectComponent', () => {
  let component: BenchmarkingProjectComponent;
  let fixture: ComponentFixture<BenchmarkingProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BenchmarkingProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BenchmarkingProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
