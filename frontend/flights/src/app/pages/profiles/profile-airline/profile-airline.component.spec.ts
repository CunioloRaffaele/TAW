import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAirlineComponent } from './profile-airline.component';

describe('ProfileAirlineComponent', () => {
  let component: ProfileAirlineComponent;
  let fixture: ComponentFixture<ProfileAirlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileAirlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileAirlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
