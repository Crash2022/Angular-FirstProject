import { Component, Input, OnInit } from '@angular/core'
import { combineLatest, map, Observable } from 'rxjs'
import { TaskAPIType, TaskStatusEnum, UpdateTaskModelType } from '../../../../models/todos.model'
import { TasksService } from '../../../../services/tasks.service'
import { TodosService } from '../../../../services/todos.service'

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
    constructor(private tasksService: TasksService, private todosService: TodosService) {}

    // инициализация компоненты
    ngOnInit(): void {
        // подписка на изменение стейта // вариант до фильтрации ТЛ
        // this.tasks$ = this.tasksService.tasks$.pipe(
        //     map(tasks => {
        //         // таски для конкретного тудулиста
        //         return tasks[this.todolistId]
        //     })
        // )

        // подписка на два потока одновременно
        this.tasks$ = combineLatest([this.todosService.todos$, this.tasksService.tasks$]).pipe(
            map(res => {
                const tasks = res[1]
                let tasksForTodo = tasks[this.todolistId]
                const todos = res[0]
                const activeTodo = todos.find(tl => tl.id === this.todolistId)

                if (activeTodo?.filter === 'completed') {
                    tasksForTodo = tasksForTodo.filter(
                        task => task.status === TaskStatusEnum.Completed
                    )
                }
                if (activeTodo?.filter === 'active') {
                    tasksForTodo = tasksForTodo.filter(task => task.status === TaskStatusEnum.New)
                }
                return tasksForTodo
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
