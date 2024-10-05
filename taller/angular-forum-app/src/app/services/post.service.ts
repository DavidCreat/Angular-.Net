import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  Id: string; 
  title: string;
  content: string;
  image: string;
  categories: string[];
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:5002/api/posts';

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.apiUrl);
  }

  getPost(id: string): Observable<Post> {
    return this.http.get<Post>(`${this.apiUrl}/${id}`);
  }

  createPost(post: Post): Observable<Post> {
    return this.http.post<Post>(this.apiUrl, post);
  }

  updatePost(id: string, post: Post): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, post);
  }

  deletePost(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
