import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobileSelfComponent } from './mobile-self.component';

describe('MobileSelfComponent', () => {
  let component: MobileSelfComponent;
  let fixture: ComponentFixture<MobileSelfComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MobileSelfComponent]
    });
    fixture = TestBed.createComponent(MobileSelfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
