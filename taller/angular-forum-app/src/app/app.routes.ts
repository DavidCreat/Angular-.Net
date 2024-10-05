import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreatePostComponent },
];