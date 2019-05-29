import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizReesultComponent } from './quiz-reesult.component';

describe('QuizReesultComponent', () => {
  let component: QuizReesultComponent;
  let fixture: ComponentFixture<QuizReesultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuizReesultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuizReesultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
