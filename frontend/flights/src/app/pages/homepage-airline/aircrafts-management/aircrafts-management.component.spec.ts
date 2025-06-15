import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftsManagementComponent } from './aircrafts-management.component';

describe('AircraftsManagementComponent', () => {
  let component: AircraftsManagementComponent;
  let fixture: ComponentFixture<AircraftsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AircraftsManagementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
