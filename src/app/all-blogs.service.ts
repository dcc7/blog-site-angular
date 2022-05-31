import { Injectable } from '@angular/core';
import { Blog } from './models/blog.model';
import { map } from 'rxjs/operators';

import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AllBlogsService {

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
    ) { }


  //Pre http
  blogs: any;


  createBlog(newBlog: any) {
    this.postBlog(newBlog);
  }

  updateBlog(updatedBlog: Blog) {
    return this.http.put<Blog>(`https://blog-project-e36e5-default-rtdb.firebaseio.com/blogs/${updatedBlog.id}.json`, updatedBlog);
  }


  //Post http
  fetchBlogs(){
    return this.http.get<any>('https://blog-project-e36e5-default-rtdb.firebaseio.com/blogs.json')
      .pipe(map((responseData: any) => {

        const blogsArray: Blog[] = [];

        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            blogsArray.push({...responseData[key], id: key});
          }
        }
        return blogsArray;
      }));
  }


  postBlog(blogData: any) {
    return this.http.post<Blog>('https://blog-project-e36e5-default-rtdb.firebaseio.com/blogs.json', blogData)
      .subscribe((information) => {
        // console.log(information);
      }, error => {
        console.log(error);
      })
  }

  deleteBlog(id: string) {
    return this.http.delete<any>(`https://blog-project-e36e5-default-rtdb.firebaseio.com/blogs/${id}.json`).subscribe(() => {
      this.router.navigate(['/']);
    });
  }


}
