import {Component} from 'angular2/core';

import {NavBarComponent} from './navbar.component';

@Component({
    selector: 'my-app',
    template: '<navbar></navbar>',
    directives: [NavBarComponent]
})
export class AppComponent { }