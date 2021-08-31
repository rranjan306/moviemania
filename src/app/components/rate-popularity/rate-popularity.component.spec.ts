import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatePopularityComponent } from './rate-popularity.component';

describe('RatePopularityComponent', () => {
  let component: RatePopularityComponent;
  let fixture: ComponentFixture<RatePopularityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatePopularityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatePopularityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
