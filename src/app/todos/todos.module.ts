import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { TodosRoutingModule } from './todos-routing.module'
import { TodosComponent } from './components/todos/todos.component'
import { TodolistComponent } from './components/todos/todolist/todolist.component'
import { FormsModule } from '@angular/forms'

@NgModule({
    declarations: [TodosComponent, TodolistComponent],
    imports: [CommonModule, TodosRoutingModule, FormsModule],
})
export class TodosModule {}
