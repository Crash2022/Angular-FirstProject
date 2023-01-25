import { Component } from '@angular/core'

interface Lessons {
    id: number
    title: string
    grades: Grades[]
}

interface Grades {
    id: number
    mark: number
}

interface Fruits {
    id: number
    name: string
    price: number
}

@Component({
    selector: 'first-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
    switchValue = ''
    isLoading = false
    isClass = false

    constructor() {
        // setTimeout(() => {
        //     this.isLoading = false
        // }, 3000)
        // setTimeout(() => {
        //     this.isClass = true
        // }, 2000)
    }

    fruits: Fruits[] = [
        { id: 1, name: 'apple', price: 10 },
        { id: 2, name: 'mango', price: 100 },
        { id: 3, name: 'strawberry', price: 30 },
        { id: 4, name: 'banana', price: 20 },
        { id: 5, name: 'pineapple', price: 40 },
        { id: 6, name: 'dragon fruit', price: 50 },
        { id: 7, name: 'pearl', price: 25 },
        { id: 8, name: 'lemon', price: 15 },
        { id: 9, name: 'kiwi', price: 60 },
    ]

    grades: string[] = ['js: 4', 'react: 5']
    lessons: Lessons[] = [
        {
            id: 1,
            title: 'react',
            grades: [
                {
                    id: 0,
                    mark: 4,
                },
                {
                    id: 1,
                    mark: 3,
                },
                {
                    id: 3,
                    mark: 5,
                },
            ],
        },
        {
            id: 1,
            title: 'JS',
            grades: [
                {
                    id: 0,
                    mark: 3,
                },
                {
                    id: 1,
                    mark: 3,
                },
                {
                    id: 3,
                    mark: 5,
                },
            ],
        },
    ]

    getGrade(grade: string) {
        this.grades.push(grade)
    }
}
