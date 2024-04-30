import { Routes } from '@angular/router';
import { LandingPageComponent } from './Components/LandingPage/LandingPage.component';
import { RegistrationComponent } from './Components/Registration/Registration.component';

export const routes: Routes = [
    { path:'registration', component: RegistrationComponent },
    { path:'', component: LandingPageComponent }
];
