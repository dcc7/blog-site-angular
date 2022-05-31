import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Blog } from '../models/blog.model';

@Component({
  selector: 'app-blog-tile',
  templateUrl: './blog-tile.component.html',
  styleUrls: ['./blog-tile.component.css']
})
export class BlogTileComponent implements OnInit {

  @Input('blogInformation') blog: Blog;

  constructor(
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

  goToBlog(id: number) {
    this.router.navigate([`/blogs/${id}`], {relativeTo: this.route})
  }

}

