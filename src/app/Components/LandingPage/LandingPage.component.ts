import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GbBigButtonComponent } from '../GbBigButton/GbBigButton.component';
import { NavComponent } from '../Nav/Nav.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule, GbBigButtonComponent, NavComponent
  ],
  templateUrl: './LandingPage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent {
  
 }
