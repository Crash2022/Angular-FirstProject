import { Component, OnInit } from '@angular/core'
import { HttpClient } from '@angular/common/http'

interface Todolists {
    addedDate: string
    id: string
    order: number
    title: string
}

@Component({
    selector: 'first-todos',
    templateUrl: './todos.component.html',
    styleUrls: ['./todos.component.scss'],
})
export class TodosComponent implements OnInit {
    todos: Todolists[] = []

    constructor(private http: HttpClient) {}
    ngOnInit(): void {
        this.getTodos()
    }
    getTodos() {
        this.http
            .get<Todolists[]>('https://social-network.samuraijs.com/api/1.1/todo-lists', {
                withCredentials: true,
                headers: {
                    'api-key': '74a19bbb-094d-4af5-81dc-fc82431ac8a3',
                },
            })
            .subscribe((res: Todolists[]) => {
                // console.log(res)
                this.todos = res
            })
    }
}
