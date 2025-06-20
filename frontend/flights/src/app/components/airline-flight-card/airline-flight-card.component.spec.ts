import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineFlightCardComponent } from './airline-flight-card.component';

describe('AirlineFlightCardComponent', () => {
  let component: AirlineFlightCardComponent;
  let fixture: ComponentFixture<AirlineFlightCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlineFlightCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlineFlightCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
