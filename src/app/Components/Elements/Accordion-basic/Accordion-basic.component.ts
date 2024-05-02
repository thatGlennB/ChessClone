import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
	selector: 'ngbd-accordion-basic',
	standalone: true,
	imports: [NgbAccordionModule],
	templateUrl: './accordion-basic.component.html',
})
export class NgbdAccordionBasic {}