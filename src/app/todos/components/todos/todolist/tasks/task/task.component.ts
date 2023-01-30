import { Component, Input } from '@angular/core'
import { TaskAPIType } from '../../../../../models/todos.model'

@Component({
    selector: 'todolist-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss'],
})
export class TaskComponent {
    @Input() task!: TaskAPIType

    deleteTaskHandler() {
        alert('task was deleted')
    }
}
