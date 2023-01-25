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

@Component({
    selector: 'first-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
    switchValue = ''
    isLoading = true

    constructor() {
        setTimeout(() => {
            this.isLoading = false
        }, 3000)
    }

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
