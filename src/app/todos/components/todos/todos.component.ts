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
    deleteTodo() {
        const todolistId = '22c772ec-0980-416c-954e-1c7a04d9e405'
        this.todosService.deleteTodo(todolistId)
    }
    // updateTodo() {
    //     const todolistId = '263dfd11-2d17-4029-a412-454844206a2f'
    //     const newTitle = 'Updated Title'
    //     this.todosService.updateTodo(todolistId, newTitle)
    // }
}
