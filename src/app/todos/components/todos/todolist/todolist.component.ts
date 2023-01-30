import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Todolist } from '../../../models/todos.model'

@Component({
    selector: 'todolist-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
    @Input() todolist!: Todolist
    // передаём колбэк в родительскую компоненту
    @Output() deleteTodoEvent = new EventEmitter<string>()

    // можно было бы реализовать удаление здесь
    // constructor(private todosService: TodosService) {}

    deleteTodoHandler() {
        // const todolistId = '22c772ec-0980-416c-954e-1c7a04d9e405'
        // this.todosService.deleteTodo
        this.deleteTodoEvent.emit(this.todolist.id)
    }
}
