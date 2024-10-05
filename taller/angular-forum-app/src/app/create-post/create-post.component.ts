import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PostService, Post } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-post',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <div class="min-h-screen bg-purple-900 text-white p-4">
      <nav class="flex justify-end space-x-4 mb-6">
        <a routerLink="/" class="hover:text-purple-300">Home</a>
        <a routerLink="/posts" class="hover:text-purple-300">Posts</a>
        <a routerLink="/stats" class="hover:text-purple-300">Stats</a>
      </nav>
      
      <div class="flex">
        <!-- Formulario -->
        <div class="w-1/2 pr-4">
          <h2 class="text-2xl font-bold mb-4">Formulario</h2>
          <form (ngSubmit)="onSubmit()" class="space-y-4">
            <div>
              <label for="title" class="block mb-1">Título</label>
              <input
                type="text"
                id="title"
                name="title"
                [(ngModel)]="post.title"
                class="w-full bg-purple-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <div>
              <label for="content" class="block mb-1">Contenido</label>
              <textarea
                id="content"
                name="content"
                [(ngModel)]="post.content"
                class="w-full bg-purple-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                rows="4"
                required
              ></textarea>
            </div>
            <div>
              <label for="image" class="block mb-1">Url Imagen</label>
              <input
                type="url"
                id="image"
                name="image"
                [(ngModel)]="post.image"
                class="w-full bg-purple-800 text-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div>
              <label for="category" class="block mb-1">Categorías</label>
              <div class="flex">
                <input
                  type="text"
                  id="category"
                  [(ngModel)]="newCategory"
                  name="category"
                  class="flex-grow bg-purple-800 text-white rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="button"
                  (click)="addCategory()"
                  class="bg-purple-600 text-white px-4 py-2 rounded-r-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  +
                </button>
              </div>
            </div>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let category of post.categories; trackBy: trackByCategory" class="bg-purple-700 text-xs px-2 py-1 rounded-full">
                {{ category }}
                <button (click)="removeCategory(category)" class="ml-1 text-xs">&times;</button>
              </span>
            </div>
            <button type="submit" class="bg-pink-600 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded">
              Agregar
            </button>
          </form>
        </div>
        
        <!-- Preview -->
        <div class="w-1/2 pl-4">
          <h2 class="text-2xl font-bold mb-4">Prevista</h2>
          <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <img *ngIf="post.image; else noImage" [src]="post.image" [alt]="post.title" class="w-full h-48 object-cover" />
            <ng-template #noImage>
              <div class="w-full h-48 bg-gray-200 flex items-center justify-center">
                <span class="text-gray-400 text-lg">No image</span>
              </div>
            </ng-template>
            <div class="p-4">
              <h3 class="font-bold text-lg mb-2 text-gray-800">{{ post.title || 'Título ejemplo' }}</h3>
              <p class="text-gray-600 mb-2">{{ post.content || 'Contenido de ejemplo' }}</p>
              <div class="flex flex-wrap gap-2">
                <span *ngFor="let category of post.categories; trackBy: trackByCategory" class="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">{{ category }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class CreatePostComponent {
  post: Post = {
    Id: '', // Id vacío
    title: '',
    content: '',
    image: '',
    categories: [],
  };
  newCategory = '';

  constructor(private postService: PostService, private router: Router) {}

  trackByCategory(index: number, category: string): string {
    return category;
  }

  addCategory() {
    if (this.newCategory.trim()) {
      this.post.categories.push(this.newCategory.trim());
      this.newCategory = '';
    }
  }

  removeCategory(category: string) {
    this.post.categories = this.post.categories.filter(c => c !== category);
  }

  onSubmit() {
    // Verificación de la validez del formulario
    if (this.post.title && this.post.content) {
      this.postService.createPost(this.post).subscribe(
        (createdPost) => {
          console.log('Post creado:', createdPost);
          this.router.navigate(['/']); // envio al inicio después de crear el post
        },
        (error) => {
          console.error('Error al crear el post:', error);
        }
      );
    } else {
      console.error('Formulario no válido:', this.post);
    }
  }
}
