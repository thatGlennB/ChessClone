import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GbBigButtonComponent } from '../Button/Button.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    CommonModule, GbBigButtonComponent
  ],
  templateUrl: './LandingPage.component.html',
  styleUrl: './LandingPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LandingPageComponent { }
