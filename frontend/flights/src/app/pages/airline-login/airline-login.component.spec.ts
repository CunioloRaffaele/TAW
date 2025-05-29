import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirlineLoginComponent } from './airline-login.component';

describe('AirlineLoginComponent', () => {
  let component: AirlineLoginComponent;
  let fixture: ComponentFixture<AirlineLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AirlineLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirlineLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
