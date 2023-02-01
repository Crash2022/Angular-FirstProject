import { Component, EventEmitter, Input, Output } from '@angular/core'
import { DomainTodolist, FilterType } from '../../../models/todos.model'
import { TodosService } from '../../../services/todos.service'

@Component({
    selector: 'todolist-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
    @Input() todolist!: DomainTodolist
    // передаём колбэк в родительскую компоненту
    @Output() deleteTodoEvent = new EventEmitter<string>()
    @Output() updateTodoEvent = new EventEmitter<{ todolistId: string; newTitle: string }>()

    isTitleEditMode = false
    newTitle = ''

    constructor(private todosService: TodosService) {}

    deleteTodoHandler() {
        // this.todosService.deleteTodo
        this.deleteTodoEvent.emit(this.todolist.id)
    }

    activateTitleEditModeHandler() {
        this.newTitle = this.todolist.title
        // this.isTitleEditMode = !this.isTitleEditMode
        this.isTitleEditMode = true
    }

    updateTodolistTitleHandler() {
        // this.isTitleEditMode = !this.isTitleEditMode
        this.isTitleEditMode = false
        this.updateTodoEvent.emit({ todolistId: this.todolist.id, newTitle: this.newTitle })
    }

    changeFilter(filter: FilterType) {
        this.todosService.changeTodolistFilter({ todolistId: this.todolist.id, filter })
    }
}
