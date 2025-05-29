import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineEnrollmentComponent } from './airline-enrollment.component';

describe('AirlineEnrollmentComponent', () => {
  let component: AirlineEnrollmentComponent;
  let fixture: ComponentFixture<AirlineEnrollmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlineEnrollmentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlineEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
