import { Routes } from '@angular/router';
import { CounterComponent } from './counter/counter.component';
import { UsersListComponent } from './user/users-list/users-list.component';
import { TodosListComponent } from './todos/todos-list/todos-list.component';

export const routes: Routes = [
    { path: "counter", component: CounterComponent },
    { path: "users", component: UsersListComponent },
    { path: "todos", component: TodosListComponent }
];
