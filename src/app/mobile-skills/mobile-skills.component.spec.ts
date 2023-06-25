import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSkillsComponent } from './mobile-skills.component';

describe('MobileSkillsComponent', () => {
  let component: MobileSkillsComponent;
  let fixture: ComponentFixture<MobileSkillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileSkillsComponent]
    });
    fixture = TestBed.createComponent(MobileSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
