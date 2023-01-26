import { Component, OnInit } from '@angular/core'
import { ValueService } from '../services/value.service'
import { Observable } from 'rxjs'

@Component({
    selector: 'first-comp-a',
    templateUrl: './comp-a.component.html',
    styleUrls: ['./comp-a.component.scss'],
})
export class CompAComponent implements OnInit {
    value$ = new Observable()

    constructor(private valueService: ValueService) {}

    ngOnInit(): void {
        // this.value = this.valueService.value
        this.valueService.value$.subscribe(value => {
            this.value$ = this.valueService.value$
        })
    }

    incrementValue() {
        this.valueService.increment()
    }
    // decrementValue() {
    //     this.valueService.decrement()
    // }
}
