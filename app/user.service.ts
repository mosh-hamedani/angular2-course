import {Injectable} from 'angular2/core';
import {Http} from 'angular2/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {
	private _url = "http://jsonplaceholder.typicode.com/users";

	constructor(private _http: Http){
	}

	getUsers(){
		return this._http.get(this._url)
			.map(res => res.json());
	}
}