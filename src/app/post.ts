

export interface Post {
	short_url: string;
	title: string;
	date: Date;
}

export interface Posts {
	posts: Post[];
}

export interface TumblrPosts {
	response: Posts;
}