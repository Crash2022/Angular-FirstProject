import { Injectable } from '@angular/core'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { environment } from '../../../environments/environments'
import { BehaviorSubject, catchError, EMPTY, map } from 'rxjs'
import { BeautyLoggerService } from '../../core/services/beauty-logger.service'
import { DomainTask, TaskAPIType, UpdateTaskModelType } from '../models/todos.model'
import { BaseTodoResponse, TasksResponseType } from '../../core/models/core.model'

@Injectable({
    providedIn: 'root',
})
export class TasksService {
    // создаем начальное значение (initialState)
    tasks$: BehaviorSubject<DomainTask> = new BehaviorSubject<DomainTask>({})

    constructor(private http: HttpClient, private beautyLoggerService: BeautyLoggerService) {}

    getTasks(todolistId: string) {
        return this.http
            .get<TasksResponseType>(`${environment.baseUrl}/todo-lists/${todolistId}/tasks`)
            .pipe(
                map(res => res.items),
                catchError(this.errorHandler.bind(this))
            )
            .subscribe((tasks: TaskAPIType[]) => {
                const stateTasks = this.tasks$.getValue()
                stateTasks[todolistId] = tasks
                this.tasks$.next(stateTasks)
            })
    }

    addTask(data: { todolistId: string; title: string }) {
        return this.http
            .post<BaseTodoResponse<{ item: TaskAPIType }>>(
                `${environment.baseUrl}/todo-lists/${data.todolistId}/tasks`,
                {
                    title: data.title,
                }
            )
            .pipe(
                // получаем новую таску и записываем её в массив всех тасок
                map(res => {
                    const stateTasks = this.tasks$.getValue()
                    const newTask = res.data.item
                    const newTasks = [newTask, ...stateTasks[data.todolistId]]
                    stateTasks[data.todolistId] = newTasks
                    return stateTasks
                }),
                catchError(this.errorHandler.bind(this))
            )
            .subscribe((tasks: DomainTask) => {
                // делаем подписку, чтобы стейт обновлялся сразу
                this.tasks$.next(tasks)
            })
    }

    deleteTask(data: { todolistId: string; taskId: string }) {
        return this.http
            .delete<BaseTodoResponse>(
                `${environment.baseUrl}/todo-lists/${data.todolistId}/tasks/${data.taskId}`
            )
            .pipe(
                map(() => {
                    const stateTasks = this.tasks$.getValue()
                    const currentTasks = stateTasks[data.todolistId]
                    const filteredTasks = currentTasks.filter(t => t.id !== data.taskId)
                    stateTasks[data.todolistId] = filteredTasks
                    return stateTasks
                }),
                catchError(this.errorHandler.bind(this))
            )
            .subscribe((tasks: DomainTask) => {
                this.tasks$.next(tasks)
            })
    }

    updateTaskStatus(data: { todolistId: string; taskId: string; model: UpdateTaskModelType }) {
        return this.http
            .put<BaseTodoResponse>(
                `${environment.baseUrl}/todo-lists/${data.todolistId}/tasks/${data.taskId}`,
                data.model
            )
            .pipe(
                map(() => {
                    const stateTasks = this.tasks$.getValue()
                    const currentTasks = stateTasks[data.todolistId]
                    const newTasks = currentTasks.map(t =>
                        t.id === data.taskId ? { ...t, ...data.model } : t
                    )
                    stateTasks[data.todolistId] = newTasks
                    return stateTasks
                }),
                catchError(this.errorHandler.bind(this))
            )
            .subscribe((tasks: DomainTask) => {
                this.tasks$.next(tasks)
            })
    }

    // общий обработчик ошибок
    private errorHandler(error: HttpErrorResponse) {
        this.beautyLoggerService.logger(error.message, 'error')
        return EMPTY
    }
}
