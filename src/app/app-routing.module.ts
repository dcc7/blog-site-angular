import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogTileComponent } from './blog-tile/blog-tile.component';
import { BlogComponent } from './blog/blog.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'blogs', component: BlogListComponent},
  { path: 'blogs/:id', component: BlogComponent},
  { path: 'register', component: RegistrationFormComponent},
  { path: '**', component: ErrorPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
