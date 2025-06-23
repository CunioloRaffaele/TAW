import { Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AirlineRegistrationComponent } from './pages/admin-dashboard/airline-registration/airline-registration.component';
import { AirlinesManagementComponent } from './pages/admin-dashboard/airlines-management/airlines-management.component';
import { AirportsManagementComponent } from './pages/admin-dashboard/airports-management/airports-management.component';
import { UsersManagementComponent } from './pages/admin-dashboard/users-management/users-management.component';
import { AirlineEnrollmentComponent } from './pages/airline-enrollment/airline-enrollment.component';
import { AirlineLoginComponent } from './pages/airline-login/airline-login.component';
import { UserRegistrationComponent } from './pages/user-registration/user-registration.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { roleAuthGuard } from './guards/role-auth.guard';
import { HomepageAirlineComponent } from './pages/homepage-airline/homepage-airline.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { RoutesManagementComponent } from './pages/homepage-airline/routes-management/routes-management.component';
import { AircraftsManagementComponent } from './pages/homepage-airline/aircrafts-management/aircrafts-management.component';
import { FlightsManagementComponent } from './pages/homepage-airline/flights-management/flights-management.component';
import { ServerErrorComponent } from './pages/server-error/server-error.component';
import { FlightsDisplayComponent } from './pages/flights-display/flights-display.component';
import { ProfileCustomerComponent } from './pages/profiles/profile-customer/profile-customer.component';
import { TicketBookingComponent } from './pages/ticket-booking/ticket-booking.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent }, // homepage pubblica
  { path: 'signin', component: SigninComponent },
  { path: 'forbidden', component: ForbiddenComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [roleAuthGuard],
    data: { roles: [1] }, // solo admin (role 1)
    children: [
      { path: 'airline-registration', component: AirlineRegistrationComponent },
      { path: 'airlines-management', component: AirlinesManagementComponent },
      { path: 'airports-management', component: AirportsManagementComponent },
      { path: 'users-management', component: UsersManagementComponent },
      { path: '', redirectTo: 'airline-registration', pathMatch: 'full' }
    ]
  },
  { path: 'homepage', component: HomepageComponent }, 
  {
    path: 'airline-enrollment',
    redirectTo: '/forbidden',
    pathMatch: 'full'
  },
  {
    path: 'airline-enrollment/:invitationCode/:airlineName',
    component: AirlineEnrollmentComponent
  },
  { path: 'airline-login', component: AirlineLoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  {
    path: 'homepage-airline',
    component: HomepageAirlineComponent,
    canActivate: [roleAuthGuard],
    data: { roles: [2] },
    children: [
      { path: 'routes-management', component: RoutesManagementComponent },
      { path: 'aircrafts-management', component: AircraftsManagementComponent },
      { path: 'flights-management', component: FlightsManagementComponent },
      { path: '', redirectTo: 'routes-management', pathMatch: 'full' }
    ]
  },
  { path: 'server-error', component: ServerErrorComponent },
  { path: 'flights-display', component: FlightsDisplayComponent },
  { path: 'profile-customer', component: ProfileCustomerComponent },
  { path: 'ticket-booking', component: TicketBookingComponent }
];
