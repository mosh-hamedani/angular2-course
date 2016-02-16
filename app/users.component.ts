import {Component, OnInit} from 'angular2/core';

import {UserService} from './user.service';

@Component({
    templateUrl: 'app/users.component.html',
    providers: [UserService]
})
export class UsersComponent implements OnInit {
    users: any[];
    
    constructor(private _service: UserService){
	}

	ngOnInit(){
		this._service.getUsers()
			.subscribe(users => this.users = users);
	} 
}