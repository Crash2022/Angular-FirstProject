import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

export interface Todolists {
    addedDate: string
    id: string
    order: number
    title: string
}

// eslint-disable-next-line @typescript-eslint/ban-types
export interface BaseTodoResponse<T = {}> {
    data: T
    messages: string[]
    fieldsErrors: string[]
    resultCode: number
}

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    httpOptions = {
        withCredentials: true,
        headers: {
            'api-key': '74a19bbb-094d-4af5-81dc-fc82431ac8a3',
        },
    }

    constructor(private http: HttpClient) {}

    getTodos(): Observable<Todolists[]> {
        return this.http.get<Todolists[]>(
            'https://social-network.samuraijs.com/api/1.1/todo-lists',
            this.httpOptions
        )
    }
    createTodo(title: string): Observable<BaseTodoResponse<{ item: Todolists }>> {
        return this.http.post<BaseTodoResponse<{ item: Todolists }>>(
            'https://social-network.samuraijs.com/api/1.1/todo-lists',
            { title },
            this.httpOptions
        )
    }
    deleteTodo(todolistId: string): Observable<BaseTodoResponse> {
        return this.http.delete<BaseTodoResponse>(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            this.httpOptions
        )
    }
    updateTodo(todolistId: string, newTitle: string): Observable<BaseTodoResponse> {
        return this.http.put<BaseTodoResponse>(
            `https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,
            { title: newTitle },
            this.httpOptions
        )
    }
}
