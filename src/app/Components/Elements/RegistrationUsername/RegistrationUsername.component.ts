import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-registration-username',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './RegistrationUsername.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationUsernameComponent { }
