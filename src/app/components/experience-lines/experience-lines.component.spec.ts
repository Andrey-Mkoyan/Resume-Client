import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceLinesComponent } from './experience-lines.component';

describe('ExperienceLinesComponent', () => {
  let component: ExperienceLinesComponent;
  let fixture: ComponentFixture<ExperienceLinesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExperienceLinesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
