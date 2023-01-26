import { Component, OnInit } from '@angular/core'
import { ValueService } from '../services/value.service'
import { Observable } from 'rxjs'

@Component({
    selector: 'first-comp-b',
    templateUrl: './comp-b.component.html',
    styleUrls: ['./comp-b.component.scss'],
})
export class CompBComponent implements OnInit {
    newValue$ = new Observable()

    constructor(private valueService: ValueService) {}

    ngOnInit(): void {
        // this.value = this.valueService.value
        // правильный способ
        // this.valueService.value$.subscribe(value => {
        //     this.value = value
        // })
        this.newValue$ = this.valueService.newValue$
    }

    // incrementValue() {
    //     this.valueService.increment()
    // }
    // decrementValue() {
    //     this.valueService.decrement()
    // }
    decrementValue() {
        this.valueService.decrementNew()
    }
}
