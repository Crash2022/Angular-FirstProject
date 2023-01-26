import { Component, OnInit } from '@angular/core'
import { ValueService } from '../services/value.service'

@Component({
    selector: 'first-comp-a',
    templateUrl: './comp-a.component.html',
    styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
    value = 0

    constructor(private valueService: ValueService) {}

    ngOnInit(): void {
        // this.value = this.valueService.value
        this.valueService.value$.subscribe(value => {
            this.value = value
        })
    }

    incrementValue() {
        this.valueService.increment()
    }
    // decrementValue() {
    //     this.valueService.decrement()
    // }
}
