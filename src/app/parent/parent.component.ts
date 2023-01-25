import { Component } from '@angular/core'

@Component({
    selector: 'first-parent',
    templateUrl: './parent.component.html',
    styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
    grades: string[] = ['js: 4', 'react: 5']

    getGrade(grade: string) {
        this.grades.push(grade)
    }
}
