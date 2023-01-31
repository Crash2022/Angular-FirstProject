import { Component, Input, OnInit } from '@angular/core'
import { map, Observable } from 'rxjs'
import { TaskAPIType, UpdateTaskModelType } from '../../../../models/todos.model'
import { TasksService } from '../../../../services/tasks.service'

@Component({
    selector: 'todolist-tasks',

    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
    @Input() todolistId!: string

    // делаем подписку на поток, чтобы была перерисовка при изменении
    tasks$!: Observable<TaskAPIType[]>

    // значение для инпута таски
    taskTitle = ''

    // в конструкторе делается импорт нужных сервисов
    constructor(private tasksService: TasksService) {}

    // инициализация компоненты
    ngOnInit(): void {
        // подписка на изменение стейта
        this.tasks$ = this.tasksService.tasks$.pipe(
            map(tasks => {
                // таски для конкретного тудулиста
                return tasks[this.todolistId]
            })
        )
        this.tasksService.getTasks(this.todolistId)
    }

    addTaskHandler() {
        this.tasksService.addTask({ todolistId: this.todolistId, title: this.taskTitle })
        this.taskTitle = ''
    }

    deleteTask(data: { todolistId: string; taskId: string }) {
        this.tasksService.deleteTask(data)
    }

    updateTask(data: { todolistId: string; taskId: string; model: UpdateTaskModelType }) {
        this.tasksService.updateTaskStatus(data)
    }
}
