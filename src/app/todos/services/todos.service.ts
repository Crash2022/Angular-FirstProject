import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { environment } from '../../../environments/environments'
import { BeautyLoggerService } from '../../core/services/beauty-logger.service'
import { DomainTodolist, FilterType, Todolist } from '../models/todos.model'
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

    // создаем начальное значение (initialState)
    todos$: BehaviorSubject<DomainTodolist[]> = new BehaviorSubject<DomainTodolist[]>([])

    // http - для вазимодействия с сервером
    constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {}

    getTodos() {
        this.http
            .get<Todolist[]>(`${environment.baseUrl}/todo-lists`)
            .pipe(
                map(todos => {
                    const newTodolists: DomainTodolist[] = todos.map(tl => ({
                        ...tl,
                        filter: 'all',
                    }))
                    return newTodolists
                }),
                catchError(this.consoleErrorHandler.bind(this))
            )
            .subscribe((todos: DomainTodolist[]) => {
                this.todos$.next(todos)
            })
    }
    createTodo(title: string) {
        this.http
            .post<BaseTodoResponse<{ item: Todolist }>>(`${environment.baseUrl}/todo-lists`, {
                title,
            })
            .pipe(
                map(res => {
                    const stateTodos = this.todos$.getValue()
                    const newTodo: DomainTodolist = { ...res.data.item, filter: 'all' }
                    return [newTodo, ...stateTodos]
                }),
                catchError(this.consoleErrorHandler.bind(this))
            )
            .subscribe((todos: DomainTodolist[]) => {
                this.todos$.next(todos)
            })
    }
    deleteTodo(todolistId: string) {
        this.http
            .delete<BaseTodoResponse>(`${environment.baseUrl}/todo-lists/${todolistId}`)
            .pipe(
                map(() => {
                    return this.todos$.getValue().filter(tl => tl.id !== todolistId)
                }),
                catchError(this.consoleErrorHandler.bind(this))
            )
            .subscribe(todo => {
                this.todos$.next(todo)
            })
    }
    updateTodoTitle(data: { todolistId: string; newTitle: string }) {
        this.http
            .put<BaseTodoResponse>(`${environment.baseUrl}/todo-lists/${data.todolistId}`, {
                title: data.newTitle,
            })
            .pipe(
                map(() => {
                    return this.todos$
                        .getValue()
                        .map(tl =>
                            tl.id === data.todolistId ? { ...tl, title: data.newTitle } : tl
                        )
                }),
                catchError(this.consoleErrorHandler.bind(this))
            )
            .subscribe(todo => {
                this.todos$.next(todo)
            })
    }

    changeTodolistFilter(data: { todolistId: string; filter: FilterType }) {
        const stateTodolists = this.todos$.getValue()
        const filteredTodolists = stateTodolists.map(tl =>
            tl.id === data.todolistId ? { ...tl, filter: data.filter } : tl
        )
        this.todos$.next(filteredTodolists)
    }

    // обработчик ошибок для консоли
    private consoleErrorHandler(error: HttpErrorResponse) {
        this.beautyLoggerService.logger(error.message, 'error')
        // возврат стрима
        return EMPTY
    }
}
