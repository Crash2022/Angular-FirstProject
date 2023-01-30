import { Component, Input, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { TaskAPIType } from '../../../../models/todos.model'
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

    // в конструкторе делается импорт нужных сервисов
    constructor(private tasksService: TasksService) {}

    // инициализация компоненты
    ngOnInit(): void {
        // this.tasks$ = this.tasksService.tasks$
        // this.getTasks(this.todolistId)

        this.tasks$ = this.tasksService.getTasks(this.todolistId)
    }

    /*getTasks(todolistId: string) {
        this.tasksService.getTasks(todolistId)
    }*/
}
