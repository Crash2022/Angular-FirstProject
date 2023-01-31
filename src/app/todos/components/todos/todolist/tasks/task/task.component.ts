import { Component, EventEmitter, Input, Output } from '@angular/core'
import { TaskAPIType } from '../../../../../models/todos.model'

@Component({
    selector: 'todolist-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
    @Input() task!: TaskAPIType
    @Output() deleteTaskEvent = new EventEmitter<{ todolistId: string; taskId: string }>()

    deleteTaskHandler() {
        this.deleteTaskEvent.emit({ todolistId: this.task.todoListId, taskId: this.task.id })
    }
}
