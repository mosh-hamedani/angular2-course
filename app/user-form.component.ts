import {Component} from 'angular2/core';
import {FormBuilder, ControlGroup, Validators} from 'angular2/common';

import {BasicValidators} from './basicValidators';

@Component({
    templateUrl: 'app/user-form.component.html'
})
export class UserFormComponent {
	form: ControlGroup;

	constructor(fb: FormBuilder) {
		this.form = fb.group({
			name: ['', Validators.required],
			email: ['', BasicValidators.email],
			phone: [],
			address: fb.group({
				street: [],
				suite: [],
				city: [],
				zipcode: []
			})
		});
	}
}