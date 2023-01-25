import { Component } from '@angular/core'
import { Subjects } from './child/child.component'

export interface Address {
    city: string
    house: number
}
export interface Hobbies {
    first: string
    second: string
}

@Component({
    selector: 'first-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
    react?: number
    name = 'Evgeniy'
    surname = 'Chashin'
    address: Address = {
        city: 'Orenburg',
        house: 666,
    }
    hobbies: Hobbies = {
        first: 'photo',
        second: 'bikes',
    }

    getMarks(value: Subjects) {
        this.react = value.react
    }
}
