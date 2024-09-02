import { Component, Input } from '@angular/core';
import { TodoType } from '../todos.types';

@Component({
  selector: 'app-todo-item',
  standalone: true,
  imports: [],
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.css'
})
export class TodoItemComponent {
  @Input({ required: true }) todo?: TodoType;
}
