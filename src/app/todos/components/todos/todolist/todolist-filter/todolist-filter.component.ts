import { Component, EventEmitter, Input, Output } from '@angular/core'
import { FilterType } from '../../../../models/todos.model'

@Component({
    selector: 'todolist-todolist-filter',
    templateUrl: './todolist-filter.component.html',
    styleUrls: ['./todolist-filter.component.scss'],
})
export class TodolistFilterComponent {
    @Input() filter!: FilterType
    @Output() changeFilterEvent = new EventEmitter<FilterType>()

    changeFilterHandler(filter: FilterType) {
        this.changeFilterEvent.emit(filter)
    }
}
