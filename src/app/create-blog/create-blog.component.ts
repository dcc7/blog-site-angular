
import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { AllBlogsService } from '../all-blogs.service';

@Component({
  selector: 'app-create-blog',
  templateUrl: './create-blog.component.html',
  styleUrls: ['./create-blog.component.css']
})
export class CreateBlogComponent implements OnInit {

  @ViewChild('title') title!: ElementRef;
  @ViewChild('body') body!: ElementRef;

  @Output() refresh = new EventEmitter<any>();

  constructor(private blogService: AllBlogsService) { }

  ngOnInit(): void {
  }

  createBlog(){
    const newBlog = {title: this.title.nativeElement.value , body: this.body.nativeElement.value };
    this.blogService.createBlog(newBlog).subscribe(() => {
      this.refresh.emit();
    })
  }

}
