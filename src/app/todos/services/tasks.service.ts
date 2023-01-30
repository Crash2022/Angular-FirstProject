import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environments'
import { BehaviorSubject, catchError, EMPTY, map, Observable } from 'rxjs'
import { BeautyLoggerService } from '../../core/services/beauty-logger.service'
import { TaskAPIType } from '../models/todos.model'
import { TasksResponseType } from '../../core/models/core.model'

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    // создаем начальное значение (initialState)
    // tasks$: BehaviorSubject<TaskAPIType[]> = new BehaviorSubject<TaskAPIType[]>([])

    constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {}

    // почему так не работает? приходит id с одного тудулиста!
    /*getTasks(todolistId: string) {
        this.http
            .get<TasksResponseType>(`${environment.baseUrl}/todo-lists/${todolistId}/tasks`)
            .pipe(catchError(this.errorHandler.bind(this)))
            .subscribe(tasks => {
                this.tasks$.next(tasks.items)
            })
    }*/
    getTasks(todolistId: string): Observable<TaskAPIType[]> {
        return this.http
            .get<TasksResponseType>(`${environment.baseUrl}/todo-lists/${todolistId}/tasks`)
            .pipe(
                map(res => res.items),
                catchError(this.errorHandler.bind(this))
            )
    }

    // общий обработчик ошибок
    private errorHandler(error: HttpErrorResponse) {
        this.beautyLoggerService.logger(error.message, 'error')
        return EMPTY
    }
}
