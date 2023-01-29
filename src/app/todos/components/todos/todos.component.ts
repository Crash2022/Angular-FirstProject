import { Component, OnDestroy, OnInit } from '@angular/core'
import { Todolists, TodosService } from '../../services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'
import { Observable, Subscription } from 'rxjs'

@Component({
    selector: 'first-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit /*, OnDestroy*/ {
    // делаем подписку
    todos$!: Observable<Todolists[]>
    // значение для ошибки
    error = ''

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
        const randomNumber = Math.floor(Math.random() * 100)
        const title = 'Angular' + randomNumber
        this.todosService.createTodo(title)
    }
    deleteTodo() {
        const todolistId = '22c772ec-0980-416c-954e-1c7a04d9e405'
        this.todosService.deleteTodo(todolistId)
    }
    updateTodo() {
        const todolistId = '263dfd11-2d17-4029-a412-454844206a2f'
        const newTitle = 'Updated Title'
        this.todosService.updateTodo(todolistId, newTitle)
    }

    // вариант кода до рефакторинга
    /*todos: Todolists[] = []
    error = ''

    subscription: Subscription = new Subscription()
    // плохой вариант отписки
    // subscription1: Subscription | null = null
    // subscription2: Subscription | null = null

    constructor(private todosService: TodosService) {}
    ngOnInit(): void {
        this.getTodos()
    }
    ngOnDestroy(): void {
        // плохой вариант отписки
        /!*if (this.subscription1) {
            this.subscription1.unsubscribe()
            this.subscription1 = null
        }
        if (this.subscription2) {
            this.subscription2.unsubscribe()
            this.subscription2 = null
        }*!/
        // необходимо обернуть каждую подписку, а здесь отписаться
        this.subscription.unsubscribe()
    }
    getTodos() {
        // синтаксис для случая без обработки ошибки
        /!* this.todosService.getTodos().subscribe((res: Todolists[]) => {
            this.todos = res
        })*!/
        // синтаксис для случая с обработкой ошибки + отписка на подписку
        this.subscription.add(
            this.todosService.getTodos().subscribe({
                next: (res: Todolists[]) => {
                    this.todos = res
                },
                error: (error: HttpErrorResponse) => {
                    // console.log(error.message)
                    this.error = error.message
                },
            })
        )
    }
    createTodo() {
        const randomNumber = Math.floor(Math.random() * 100)
        const title = 'Angular' + randomNumber
        this.subscription.add(
            this.todosService.createTodo(title).subscribe(res => {
                this.todos.unshift(res.data.item)
            })
        )
    }
    deleteTodo() {
        const todolistId = '92d8b81f-f12c-4b3e-ac86-ba92d79338da'
        this.subscription.add(
            this.todosService.deleteTodo(todolistId).subscribe(() => {
                this.todos = this.todos.filter(tl => tl.id !== todolistId)
            })
        )
    }
    updateTodo() {
        const todolistId = '2a3d46c9-d62e-46fa-a417-74bbd4dafe8b'
        const newTitle = 'Updated Title'
        this.subscription.add(
            this.todosService.updateTodo(todolistId, newTitle).subscribe(() => {
                this.todos = this.todos.map(tl =>
                    tl.id === todolistId ? { ...tl, title: newTitle } : tl
                )
            })
        )
    }*/
}
