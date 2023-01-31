import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodosRoutingModule } from './todos-routing.module'
import { TodosComponent } from './components/todos/todos.component'
import { TodolistComponent } from './components/todos/todolist/todolist.component'
import { FormsModule } from '@angular/forms';
import { TasksComponent } from './components/todos/todolist/tasks/tasks.component';
import { TaskComponent } from './components/todos/todolist/tasks/task/task.component';
import { TodolistFilterComponent } from './components/todos/todolist/todolist-filter/todolist-filter.component'

@NgModule({
    declarations: [TodosComponent, TodolistComponent, TasksComponent, TaskComponent, TodolistFilterComponent],
    imports: [CommonModule, TodosRoutingModule, FormsModule],
})
export class TodosModule {}
