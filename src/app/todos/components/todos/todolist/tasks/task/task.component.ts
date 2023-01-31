import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TaskAPIType, TaskStatusEnum, UpdateTaskModelType } from '../../../../../models/todos.model'

@Component({
    selector: 'todolist-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
    @Input() task!: TaskAPIType
    @Output() deleteTaskEvent = new EventEmitter<{ todolistId: string; taskId: string }>()
    @Output() updateTaskEvent = new EventEmitter<{
        todolistId: string
        taskId: string
        model: UpdateTaskModelType
    }>()

    taskStatusEnum = TaskStatusEnum

    isTaskTitleEditMode = false
    newTaskTitle = ''

    deleteTaskHandler() {
        this.deleteTaskEvent.emit({ todolistId: this.task.todoListId, taskId: this.task.id })
    }

    activateTaskTitleEditModeHandler() {
        this.isTaskTitleEditMode = true
        this.newTaskTitle = this.task.title
    }

    changeTask(patch: Partial<UpdateTaskModelType>) {
        const model: UpdateTaskModelType = {
            status: this.task.status,
            title: this.task.title,
            priority: this.task.priority,
            description: this.task.description,
            startDate: this.task.startDate,
            deadline: this.task.deadline,
            ...patch,
        }

        this.updateTaskEvent.emit({
            todolistId: this.task.todoListId,
            taskId: this.task.id,
            model: model,
        })
    }

    updateTaskStatusHandler(event: MouseEvent) {
        const newStatus = (event.currentTarget as HTMLInputElement).checked

        this.changeTask({ status: newStatus ? TaskStatusEnum.Completed : TaskStatusEnum.New })
        // const model: UpdateTaskModelType = {
        //     status: newStatus ? TaskStatusEnum.Completed : TaskStatusEnum.New,
        //     title: this.task.title,
        //     priority: this.task.priority,
        //     description: this.task.description,
        //     startDate: this.task.startDate,
        //     deadline: this.task.deadline,
        // }
        // this.updateTaskEvent.emit({
        //     todolistId: this.task.todoListId,
        //     taskId: this.task.id,
        //     model: model,
        // })
    }

    updateTaskTitleHandler() {
        // const newTitle = this.newTaskTitle

        this.changeTask({ title: this.newTaskTitle })
        // const model: UpdateTaskModelType = {
        //     status: this.task.status,
        //     title: newTitle,
        //     priority: this.task.priority,
        //     description: this.task.description,
        //     startDate: this.task.startDate,
        //     deadline: this.task.deadline,
        // }
        //
        // this.updateTaskEvent.emit({
        //     todolistId: this.task.todoListId,
        //     taskId: this.task.id,
        //     model: model,
        // })

        // this.newTaskTitle = '' // зачем занулять?
        this.isTaskTitleEditMode = false
    }
}
