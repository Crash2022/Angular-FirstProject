import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todolists {
    addedDate: string
    id: string
    order: number
    title: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
interface BaseTodoResponse<T = {}> {
    data: T
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

@Component({
    selector: 'first-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
    httpOptions = {
        withCredentials: true,
        headers: {
            'api-key': '74a19bbb-094d-4af5-81dc-fc82431ac8a3',
        },
    }
    todos: Todolists[] = []

    constructor(private http: HttpClient) {}
    ngOnInit(): void {
        this.getTodos()
    }
    getTodos() {
        this.http
            .get<Todolists[]>(
                'https://social-network.samuraijs.com/api/1.1/todo-lists',
                this.httpOptions
            )
            .subscribe((res: Todolists[]) => {
                // console.log(res)
                this.todos = res
            })
    }
    createTodo() {
        const randomNumber = Math.floor(Math.random() * 100)
        const title = 'Angular' + randomNumber
        this.http
            .post<BaseTodoResponse<{ item: Todolists }>>(
                'https://social-network.samuraijs.com/api/1.1/todo-lists',
                { title },
                this.httpOptions
            )
            .subscribe(res => {
                // console.log(res)
                this.todos.unshift(res.data.item)
            })
    }
    deleteTodo() {
        const todolistId = '982ebd69-4605-4c99-9e0d-4fcd01fc5ec2'
        this.http
            .delete<BaseTodoResponse>(
                `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
                this.httpOptions
            )
            .subscribe(() => {
                // console.log(res)
                this.todos = this.todos.filter(tl => tl.id !== todolistId)
            })
    }
    updateTodo() {
        const todolistId = '2a3d46c9-d62e-46fa-a417-74bbd4dafe8b'
        const newTitle = 'Updated Title'
        this.http
            .put<BaseTodoResponse>(
                `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
                { title: newTitle },
                this.httpOptions
            )
            .subscribe(() => {
                this.todos = this.todos.map(tl =>
                    tl.id === todolistId ? { ...tl, title: newTitle } : tl
                )
            })
    }
}
