import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { RegistrationFormComponent } from './registration-form/registration-form.component';

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
    PlaceholderDirectiveDirective,
    RegistrationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
