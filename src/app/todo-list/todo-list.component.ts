import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Observable } from 'rxjs';
import { Todo } from '../models/Todo';
import { TodoListService } from './todo-list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos$!: Observable<Todo[]>;

  constructor(
    private todoListService: TodoListService,
    private messageService:MessageService
  ) { }

  loadAll = () => {
    this.todos$ = this.todoListService.findAll();
    
  }

  changeStatus(todo: Todo) {
    this.todoListService.update(todo)
      .subscribe(() => {
        this.todos$ = this.todoListService.findAll();
      });
    this.messageService.add({severity:'info', summary:'Changed status', detail:''});
  }

  deleteTodo(todo: Todo){
    this.todoListService.delete(todo.id)
      .subscribe(() => {
        this.todos$ = this.todoListService.findAll();
      });
    this.messageService.add({severity:'warning', summary:'Todo Deleted', detail:''})
  }

  cancel(): void {
    this.messageService.add({severity:'info', summary:'Click cancelled', detail:''})
  }

  ngOnInit(): void {
    this.todos$ = this.todoListService.findAll();
  }

}
