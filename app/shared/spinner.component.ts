import {Component, Input} from 'angular2/core';

@Component({
    selector: 'spinner',
    template: `
    	<i *ngIf="visible" class="fa fa-spinner fa-spin fa-3x"></i>
    `
})
export class SpinnerComponent { 
    @Input() visible = true; 
}