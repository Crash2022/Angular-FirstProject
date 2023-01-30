import { Component, OnInit } from '@angular/core'
import { TodosService } from '../../services/todos.service'
import { Observable } from 'rxjs'
import { Todolist } from '../../models/todos.model'

@Component({
    selector: 'todolist-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
    // делаем подписку на поток, чтобы была перерисовка при изменении
    todos$!: Observable<Todolist[]>
    // значение для ошибки
    // error = 'Network error. Please try again later.'
    error = ''
    // значение для названия тудулиста
    todoTitle = ''

    // в конструкторе делается импорт нужных сервисов
    constructor(private todosService: TodosService) {}
    // инициализация компоненты
    ngOnInit(): void {
        this.todos$ = this.todosService.todos$
        this.getTodos()
    }

    getTodos() {
        this.todosService.getTodos()
    }
    createTodo() {
        // const randomNumber = Math.floor(Math.random() * 100)
        // const title = 'Angular' + randomNumber
        this.todosService.createTodo(this.todoTitle)
        this.todoTitle = ''
    }
    // принимаем колбэк из дочерней компоненты
    deleteTodo(todolistId: string) {
        this.todosService.deleteTodo(todolistId)
    }
    updateTodoTitle(data: { todolistId: string; newTitle: string }) {
        this.todosService.updateTodoTitle({ todolistId: data.todolistId, newTitle: data.newTitle })
    }
}
