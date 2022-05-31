import { Component, DoCheck, OnChanges, OnInit } from '@angular/core';
import { AllBlogsService } from '../all-blogs.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  blogs: any;

  constructor(private blogService: AllBlogsService) { }

  ngOnInit(): void {
    this.blogService.fetchBlogs().subscribe((blogs) => {
      this.blogs = blogs;
    });
  }

}
