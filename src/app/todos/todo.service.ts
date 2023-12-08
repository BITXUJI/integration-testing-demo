import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class TodoService {
  constructor(private http: HttpClient) {
  }

  add(todo: any) {
    return this.http.post('...', todo);
  }

  getTodos() {
    return this.http.get<any[]>('...');
  }

  getTodosPromise() {
    return firstValueFrom(this.http.get<any[]>('...'));
  }

  delete(id: number) {
    return this.http.delete('...');
  }
}