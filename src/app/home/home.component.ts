import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AllBlogsService } from '../all-blogs.service';
import { AlertComponent } from '../alert/alert.component';
import { PlaceholderDirectiveDirective } from '../placeholder-directive.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  blogs: any;
  interval: any
  count: number = 0;
  @ViewChild(PlaceholderDirectiveDirective, {static: true}) alertHost!: PlaceholderDirectiveDirective;

  constructor(
    private blogService: AllBlogsService,
    ) { }

  ngOnInit(): void {

   this.interval = setInterval(() => {
      this.blogs = this.blogService.fetchBlogs().subscribe((blogs) => {
      this.blogs = blogs;

      if (this.blogs.length > 3 && this.count <= 1){
        this.showAlert();
      }

      this.count++
    })
   }, 500)
  
  }

  private showAlert() {
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent<AlertComponent>(AlertComponent);
    componentRef.instance.message = 'Dynamic Component Practice! Click Me!';
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }


}
