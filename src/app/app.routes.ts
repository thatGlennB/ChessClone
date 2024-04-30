import { Routes } from '@angular/router';
import { LandingPageComponent } from './Components/LandingPage/LandingPage.component';
import { RegistrationComponent } from './Components/Registration/Registration.component';

export const routes: Routes = [
    { path:'', component: LandingPageComponent },
    { path:'registration', component: RegistrationComponent }
];
