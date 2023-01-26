import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from '../../environments/environments'

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
            'api-key': `${environment.apiKey}`,
        },
    }

    constructor(private http: HttpClient) {}

    getTodos(): Observable<Todolists[]> {
        return this.http.get<Todolists[]>(`${environment.baseUrl}/todo-lists`, this.httpOptions)
    }
    createTodo(title: string): Observable<BaseTodoResponse<{ item: Todolists }>> {
        return this.http.post<BaseTodoResponse<{ item: Todolists }>>(
            `${environment.baseUrl}/todo-lists`,
            { title },
            this.httpOptions
        )
    }
    deleteTodo(todolistId: string): Observable<BaseTodoResponse> {
        return this.http.delete<BaseTodoResponse>(
            `${environment.baseUrl}/todo-lists/${todolistId}`,
            this.httpOptions
        )
    }
    updateTodo(todolistId: string, newTitle: string): Observable<BaseTodoResponse> {
        return this.http.put<BaseTodoResponse>(
            `${environment.baseUrl}/todo-lists/${todolistId}`,
            { title: newTitle },
            this.httpOptions
        )
    }
}
