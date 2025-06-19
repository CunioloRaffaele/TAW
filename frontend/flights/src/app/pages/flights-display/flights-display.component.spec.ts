import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightsDisplayComponent } from './flights-display.component';

describe('FlightsDisplayComponent', () => {
  let component: FlightsDisplayComponent;
  let fixture: ComponentFixture<FlightsDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FlightsDisplayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
