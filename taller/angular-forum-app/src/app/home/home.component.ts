import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostService, Post } from '../services/post.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="min-h-screen bg-purple-900 text-white">
      <!-- Navigacion -->
      <nav class="flex justify-end space-x-4 p-4">
        <a routerLink="/" class="hover:text-purple-300">Home</a>
        <a routerLink="/create" class="hover:text-purple-300">Create Post</a>
        <a href="#" class="hover:text-purple-300">Stats</a>
      </nav>

      <!-- buscar o añadir -->
      <div class="flex justify-between items-center px-4 py-2">
        <input
          type="text"
          placeholder="Search"
          class="w-full bg-purple-800 text-white placeholder-purple-400 rounded-md px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button routerLink="/create" class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Agregar
        </button>
      </div>

      <!-- Card Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        <div *ngFor="let post of posts; trackBy: trackByPostTitle" class="bg-purple-800 rounded-lg overflow-hidden shadow-lg">
          <img *ngIf="post.image; else noImage" [src]="post.image" [alt]="post.title" class="w-full h-48 object-cover" />
          <ng-template #noImage>
            <div class="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span class="text-gray-400 text-lg">No image</span>
            </div>
          </ng-template>
          <div class="p-4">
            <h3 class="font-bold text-lg mb-2">{{ post.title }}</h3>
            <p class="text-purple-300 mb-2">{{ post.content }}</p>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let category of post.categories; trackBy: trackByCategory" class="bg-purple-700 text-xs px-2 py-1 rounded-full">{{ category }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService) {}

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts() {
    this.postService.getPosts().subscribe(
      (posts) => {
        this.posts = posts;
      },
      (error) => {
        console.error('Error fetching posts:', error);
      }
    );
  }

  trackByPostTitle(index: number, post: Post): string {
    return post.title;
  }

  trackByCategory(index: number, category: string): string {
    return category;
  }
}
