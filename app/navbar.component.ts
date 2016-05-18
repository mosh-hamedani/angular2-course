import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';

@Component({
    selector: 'navbar',
    templateUrl: 'app/navbar.component.html',
    directives: [ROUTER_DIRECTIVES]
})
export class NavBarComponent {
    constructor(private _router: Router){
    }
    
    isCurrentRoute(route){
        var instruction = this._router.generate(route);
        return this._router.isRouteActive(instruction);
    }
 }