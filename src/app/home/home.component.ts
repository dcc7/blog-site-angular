import { Component, OnInit, ViewChild } from '@angular/core';
import { AllBlogsService } from '../all-blogs.service';
import { AlertComponent } from '../alert/alert.component';
import { PlaceholderDirectiveDirective } from '../placeholder-directive.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  blogs: any;
  @ViewChild(PlaceholderDirectiveDirective, {static: true}) alertHost!: PlaceholderDirectiveDirective;

  constructor(
    private blogService: AllBlogsService,
    ) { }

  ngOnInit(): void {

   setInterval(() => {
      this.blogs = this.blogService.fetchBlogs().subscribe((blogs) => {
      this.blogs = blogs;
    })
   }, 400)
  
   this.showAlert();
  }

  private showAlert() {
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();

    const componentRef = hostViewContainerRef.createComponent<AlertComponent>(AlertComponent);
    componentRef.instance.message = 'Dynamic Component Practice!';
  }


}
