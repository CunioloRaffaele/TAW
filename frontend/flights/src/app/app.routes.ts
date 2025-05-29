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

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    children: [
      { path: 'airline-registration', component: AirlineRegistrationComponent },
      { path: 'airlines-management', component: AirlinesManagementComponent },
      { path: 'airports-management', component: AirportsManagementComponent },
      { path: 'users-management', component: UsersManagementComponent },
      { path: '', redirectTo: 'airline-registration', pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'airline-enrollment/:invitationCode/:airlineName', component: AirlineEnrollmentComponent },
  { path: 'airline-login', component: AirlineLoginComponent },
  { path: 'user-registration', component: UserRegistrationComponent }
];
