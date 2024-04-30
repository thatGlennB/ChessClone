import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './Registration.component.html',
  styleUrl: './Registration.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent { }
