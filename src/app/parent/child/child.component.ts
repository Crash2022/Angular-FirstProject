import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Address, Hobbies } from '../parent.component'

export interface Subjects {
    math: number
    react: number
}

@Component({
    selector: 'first-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
    @Output() sendMarkEvent = new EventEmitter<Subjects>()

    @Input() surnameProps?: string
    @Input() address?: Address
    @Input() hobbies?: Hobbies
    name = 'Alexander'

    sendMark() {
        const subjects: Subjects = {
            math: 4,
            react: 5,
        }
        this.sendMarkEvent.emit(subjects)
    }
}
