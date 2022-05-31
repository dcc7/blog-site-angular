import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogTileComponent } from './blog-tile/blog-tile.component';
import { CreateBlogComponent } from './create-blog/create-blog.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AlertComponent } from './alert/alert.component';
import { PlaceholderDirectiveDirective } from './placeholder-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    BlogTileComponent,
    CreateBlogComponent,
    HeaderComponent,
    BlogComponent,
    HomeComponent,
    ErrorPageComponent,
    BlogListComponent,
    AlertComponent,
    PlaceholderDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
