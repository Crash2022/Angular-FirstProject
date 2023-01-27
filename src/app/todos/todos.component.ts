import { Component, OnInit } from '@angular/core'
import { Todolists, TodosService } from '../services/todos.service'
import { HttpErrorResponse } from '@angular/common/http'

@Component({
    selector: 'first-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
    todos: Todolists[] = []
    error = ''

    constructor(private todosService: TodosService) {}
    ngOnInit(): void {
        this.getTodos()
    }
    getTodos() {
        // синтаксис для случая без обработки ошибки
        /* this.todosService.getTodos().subscribe((res: Todolists[]) => {
            this.todos = res
        })*/
        // синтаксис для случая с обработкой ошибки
        this.todosService.getTodos().subscribe({
            next: (res: Todolists[]) => {
                this.todos = res
            },
            error: (error: HttpErrorResponse) => {
                // console.log(error.message)
                this.error = error.message
            },
        })
    }
    createTodo() {
        const randomNumber = Math.floor(Math.random() * 100)
        const title = 'Angular' + randomNumber
        this.todosService.createTodo(title).subscribe(res => {
            this.todos.unshift(res.data.item)
        })
    }
    deleteTodo() {
        const todolistId = '92d8b81f-f12c-4b3e-ac86-ba92d79338da'
        this.todosService.deleteTodo(todolistId).subscribe(() => {
            this.todos = this.todos.filter(tl => tl.id !== todolistId)
        })
    }
    updateTodo() {
        const todolistId = '2a3d46c9-d62e-46fa-a417-74bbd4dafe8b'
        const newTitle = 'Updated Title'
        this.todosService.updateTodo(todolistId, newTitle).subscribe(() => {
            this.todos = this.todos.map(tl =>
                tl.id === todolistId ? { ...tl, title: newTitle } : tl
            )
        })
    }
}
