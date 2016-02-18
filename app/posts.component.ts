import {Component, OnInit} from 'angular2/core';

import {PostService} from './post.service';

@Component({
    templateUrl: 'app/posts.component.html',
    providers: [PostService]
})
export class PostsComponent implements OnInit {
	posts = [];
    
    constructor(private _postService: PostService) {
	}

	ngOnInit() {
		this._postService.getPosts()
			.subscribe(posts =>	this.posts = posts);
	}
}