import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BespokeProjectComponent } from './bespoke-project.component';

describe('BespokeProjectComponent', () => {
  let component: BespokeProjectComponent;
  let fixture: ComponentFixture<BespokeProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BespokeProjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BespokeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
