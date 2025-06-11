import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageAirlineComponent } from './homepage-airline.component';

describe('HomepageAirlineComponent', () => {
  let component: HomepageAirlineComponent;
  let fixture: ComponentFixture<HomepageAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomepageAirlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomepageAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
