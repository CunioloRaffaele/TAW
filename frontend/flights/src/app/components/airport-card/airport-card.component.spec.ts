import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportCardComponent } from './airport-card.component';

describe('AirportCardComponent', () => {
  let component: AirportCardComponent;
  let fixture: ComponentFixture<AirportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirportCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
