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

    updateTaskStatusHandler(event: MouseEvent) {
        const newStatus = (event.currentTarget as HTMLInputElement).checked
        const model: UpdateTaskModelType = {
            status: newStatus ? TaskStatusEnum.Completed : TaskStatusEnum.New,
            title: this.task.title,
            priority: this.task.priority,
            description: this.task.description,
            startDate: this.task.startDate,
            deadline: this.task.deadline,
        }
        this.updateTaskEvent.emit({
            todolistId: this.task.todoListId,
            taskId: this.task.id,
            model: model,
        })
    }

    activateTaskTitleEditModeHandler() {
        this.newTaskTitle = this.task.title
        this.isTaskTitleEditMode = true
    }

    updateTaskTitleHandler() {
        this.isTaskTitleEditMode = false
        const newTitle = this.newTaskTitle

        const model: UpdateTaskModelType = {
            status: this.task.status,
            title: newTitle,
            priority: this.task.priority,
            description: this.task.description,
            startDate: this.task.startDate,
            deadline: this.task.deadline,
        }

        this.updateTaskEvent.emit({
            todolistId: this.task.todoListId,
            taskId: this.task.id,
            model: model,
        })
    }
}
