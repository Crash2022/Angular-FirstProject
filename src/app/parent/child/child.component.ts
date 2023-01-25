import { Component, EventEmitter, Output } from '@angular/core'

@Component({
    selector: 'first-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
})
export class ChildComponent {
    @Output() SendInputEvent = new EventEmitter<string>()

    inputGrade = ''

    sendInputTextHandler() {
        this.SendInputEvent.emit(this.inputGrade)
    }
}
