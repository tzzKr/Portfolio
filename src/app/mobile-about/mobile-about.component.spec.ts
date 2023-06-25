import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileAboutComponent } from './mobile-about.component';

describe('MobileAboutComponent', () => {
  let component: MobileAboutComponent;
  let fixture: ComponentFixture<MobileAboutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileAboutComponent]
    });
    fixture = TestBed.createComponent(MobileAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
