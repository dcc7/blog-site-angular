import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AllBlogsService } from '../all-blogs.service';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  id: any;
  blogs: any;
  blog: any;

  @ViewChild('title') title: ElementRef;
  @ViewChild('body') body: ElementRef;

  resArray: number[] = [];

  constructor(
    private route: ActivatedRoute,
    private blogService: AllBlogsService) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.blogService.fetchBlogs().subscribe((blogs) => {
      this.blogs = blogs;
      this.blogFilter();
    });
    };


  blogFilter() {
    this.blogs.filter((element: any) => {
      if (this.id === element.id) {
        this.blog = element;
      }
    });
  }  

  editBlog() {
    const changedBlog = {id: this.id, title: this.title.nativeElement.value , body: this.body.nativeElement.value };
    this.blogService.updateBlog(changedBlog).subscribe(() => {
      this.ngOnInit();
    });
  }

  deleteBlog(id: string) {
    this.blogService.deleteBlog(id);
  }

}
