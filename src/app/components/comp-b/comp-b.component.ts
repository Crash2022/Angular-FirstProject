import { Component, OnInit } from '@angular/core'
import { ValueService } from '../services/value.service'

@Component({
    selector: 'first-comp-b',
    templateUrl: './comp-b.component.html',
    styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
    value = 0

    constructor(private valueService: ValueService) {}

    ngOnInit(): void {
        // this.value = this.valueService.value
        this.valueService.value$.subscribe(value => {
            this.value = value
        })
    }

    // incrementValue() {
    //     this.valueService.increment()
    // }
    decrementValue() {
        this.valueService.decrement()
    }
}
