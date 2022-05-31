import { Component, ComponentFactoryResolver, DoCheck, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { AllBlogsService } from '../all-blogs.service';
import { Blog } from '../models/blog.model';
import { map } from 'rxjs/operators';
import { async } from '@angular/core/testing';
import { AlertComponent } from '../alert/alert.component';
import { PlaceholderDirectiveDirective } from '../placeholder-directive.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: any;
  @ViewChild(PlaceholderDirectiveDirective, { static: false }) alertHost: PlaceholderDirectiveDirective;

  constructor(
    private blogService: AllBlogsService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {

   setInterval(() => {
      this.blogs = this.blogService.fetchBlogs().subscribe((blogs) => {
      this.blogs = blogs;
    })
   }, 400)
      
  }

  showAlert() {
    // const alertCmpFactory = this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    // const hostViewContainerRef = this.alertHost.viewContainerRef;

  }


}
