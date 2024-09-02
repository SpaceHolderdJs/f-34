import { Component } from '@angular/core';
import { TodosService } from '../../service/todos-service/todos.service';
import { TodoItemComponent } from '../todo-item/todo-item.component';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [TodoItemComponent],
  providers: [TodosService],
  templateUrl: './todos-list.component.html',
  styleUrl: './todos-list.component.css'
})
export class TodosListComponent {
  constructor(public todosService: TodosService) {
    todosService.getAPITodos();
  }
}
