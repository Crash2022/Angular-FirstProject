import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environment } from '../../../environments/environments'
import { BeautyLoggerService } from '../../core/services/beauty-logger.service'
import { Todolists } from '../models/todos.model'
import { BaseTodoResponse } from '../../core/models/core.model'

@Injectable({
    providedIn: 'root',
})
export class TodosService {
    // замена на interceptor
    /*httpOptions = {
        withCredentials: true,
        headers: {
            'api-key': `${environment.apiKey}`,
        },
    }*/

    // создаем начальное значение
    todos$: BehaviorSubject<Todolists[]> = new BehaviorSubject<Todolists[]>([])

    constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {}

    getTodos() {
        this.http
            .get<Todolists[]>(`${environment.baseUrl}/todo-lists` /*, this.httpOptions*/)
            .pipe(catchError(this.errorHandler.bind(this)))
            .subscribe(todos => {
                this.todos$.next(todos)
            })
    }
    createTodo(title: string) {
        this.http
            .post<BaseTodoResponse<{ item: Todolists }>>(`${environment.baseUrl}/todo-lists`, {
                title,
            })
            .pipe(
                catchError(this.errorHandler.bind(this)),
                map(res => {
                    const newTodo = res.data.item
                    const stateTodos = this.todos$.getValue()
                    return [newTodo, ...stateTodos]
                })
            )
            .subscribe(todos => {
                this.todos$.next(todos)
            })
    }
    deleteTodo(todolistId: string) {
        this.http
            .delete<BaseTodoResponse>(`${environment.baseUrl}/todo-lists/${todolistId}`)
            .pipe(
                catchError(this.errorHandler.bind(this)),
                map(() => {
                    return this.todos$.getValue().filter(tl => tl.id !== todolistId)
                })
            )
            .subscribe(todo => {
                this.todos$.next(todo)
            })
    }
    updateTodo(todolistId: string, newTitle: string) {
        this.http
            .put<BaseTodoResponse>(`${environment.baseUrl}/todo-lists/${todolistId}`, {
                title: newTitle,
            })
            .pipe(
                catchError(this.errorHandler.bind(this)),
                map(() => {
                    return this.todos$
                        .getValue()
                        .map(tl => (tl.id === todolistId ? { ...tl, title: newTitle } : tl))
                })
            )
            .subscribe(todo => {
                this.todos$.next(todo)
            })
    }

    // общий обработчик ошибок
    private errorHandler(error: HttpErrorResponse) {
        this.beautyLoggerService.logger(error.message, 'error')
        return EMPTY
    }
}
