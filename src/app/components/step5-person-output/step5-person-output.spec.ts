import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step5PersonOutput } from './step5-person-output';

describe('Step5PersonOutput', () => {
  let component: Step5PersonOutput;
  let fixture: ComponentFixture<Step5PersonOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step5PersonOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(Step5PersonOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
