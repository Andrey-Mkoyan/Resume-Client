import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillSpinnerComponent } from './skill-spinner.component';

describe('SkillSpinnerComponent', () => {
  let component: SkillSpinnerComponent;
  let fixture: ComponentFixture<SkillSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
