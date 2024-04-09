import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule, NgbNavModule
  ],
  templateUrl: './Nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {

 }
