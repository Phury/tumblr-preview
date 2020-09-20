import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Post, TumblrPosts } from '../post';

@Component({
  selector: 'app-ng-blog-element',
  templateUrl: './ng-blog-element.component.html',
  styleUrls: ['./ng-blog-element.component.css'],
  //encapsulation: ViewEncapsulation.ShadowDom
})
export class NgBlogElementComponent implements OnInit {
  posts: Observable<Post[]>;

  displayTitle = true;
  tumblrApi = 'https://api.tumblr.com/v2/';
  apiKey = 'bKPCtADmsFdnw4Luf1FcSvmR0ENgPLQ4AEcpfyob5ClXUbo9j2';
  blogId = 'phulkor.tumblr.com';
  blogPosts = `${this.tumblrApi}/blog/${this.blogId}/posts?api_key=${this.apiKey}`;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.posts = this.http.get(this.blogPosts).pipe(
      map((data: TumblrPosts) => data.response.posts.map(p => p))
    );
  }

}
