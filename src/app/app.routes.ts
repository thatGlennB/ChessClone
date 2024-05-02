import { Routes } from '@angular/router';
import { LandingPageComponent } from './Components/Pages/LandingPage/LandingPage.component';
import { RegistrationComponent } from './Components/Pages/RegistrationPage/RegistrationPage.component';

export const routes: Routes = [
    { path:'registration', component: RegistrationComponent },
    { path:'', component: LandingPageComponent }
];
