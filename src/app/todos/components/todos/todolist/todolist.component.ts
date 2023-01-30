import { Component, Input } from '@angular/core'
import { Todolist } from '../../../models/todos.model'

@Component({
    selector: 'todolist-todolist',
    templateUrl: './todolist.component.html',
    styleUrls: ['./todolist.component.scss'],
})
export class TodolistComponent {
    @Input() todolist!: Todolist
}
