
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';

import { PaginationComponent } from './pagination.component';
import { SpinnerComponent }    from './spinner.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        PaginationComponent, 
        SpinnerComponent
    ],
    exports: [
        PaginationComponent, 
        SpinnerComponent
    ]
})
export class SharedModule { 
}