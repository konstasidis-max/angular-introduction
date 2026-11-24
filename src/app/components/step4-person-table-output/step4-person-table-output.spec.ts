import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Step4PersonTableOutput } from './step4-person-table-output';

describe('Step4PersonTableOutput', () => {
  let component: Step4PersonTableOutput;
  let fixture: ComponentFixture<Step4PersonTableOutput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Step4PersonTableOutput],
    }).compileComponents();

    fixture = TestBed.createComponent(Step4PersonTableOutput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
