import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioMasterComponent } from './portfolio-master.component';

describe('PortfolioMasterComponent', () => {
  let component: PortfolioMasterComponent;
  let fixture: ComponentFixture<PortfolioMasterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PortfolioMasterComponent]
    });
    fixture = TestBed.createComponent(PortfolioMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
