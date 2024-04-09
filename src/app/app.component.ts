import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbdAccordionBasic } from './Components/Accordion-basic/Accordion-basic.component';
import { NavComponent } from './Components/Nav/Nav.component';
import { LandingPageComponent } from './Components/LandingPage/LandingPage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NgbdAccordionBasic, NavComponent, LandingPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ChessClone';
}
 