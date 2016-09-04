
import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { HttpModule }          from '@angular/http';

import { SharedModule }        from '../shared/shared.module';

import { PostsComponent }      from './posts.component';
import { PostService }         from './post.service';
import { UserService }         from '../users/user.service';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        HttpModule
    ],
    declarations: [
        PostsComponent 
    ],
    exports: [
        PostsComponent 
    ],
    providers: [
        PostService,
        UserService
    ]
})
export class PostsModule { 
}