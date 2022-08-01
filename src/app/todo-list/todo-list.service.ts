import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {
  private resourceUrl = 'http://localhost:4200/todos';

  constructor(private http: HttpClient) { }

  
}
