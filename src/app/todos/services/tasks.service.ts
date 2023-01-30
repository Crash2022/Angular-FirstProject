import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environments'
import { BehaviorSubject, catchError, EMPTY } from 'rxjs'
import { BeautyLoggerService } from '../../core/services/beauty-logger.service'
import { TaskAPIType } from '../models/todos.model'
import { TasksResponseType } from '../../core/models/core.model'

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    // создаем начальное значение (initialState)
    tasks$: BehaviorSubject<TaskAPIType[]> = new BehaviorSubject<TaskAPIType[]>([])

    constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {}

    getTasks(todolistId: string) {
        this.http
            .get<TasksResponseType>(`${environment.baseUrl}/todo-lists/${todolistId}/tasks`)
            .pipe(catchError(this.errorHandler.bind(this)))
            .subscribe(tasks => {
                this.tasks$.next(tasks.items)
            })
    }

    // общий обработчик ошибок
    private errorHandler(error: HttpErrorResponse) {
        this.beautyLoggerService.logger(error.message, 'error')
        return EMPTY
    }
}
